/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, ReactElement } from "react";
import { useRouter } from "next/router";

import nookies from "nookies";

import api, { CommonHeaderProperties } from "../../services/api/clientApi";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../ModalProvider";

import LoadingGif from "../../components/LoadingGif";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [expirySession, setExpirySession] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Login");
  const [formValues, setFormValues] = useState({});
  const { handleShowModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const token = nookies.get().tokenFoodgram;
    const tokenExpiryTime = nookies.get().tokenExpiryTimeFoodgram;

    if(token) 
      Date.now() < parseInt(tokenExpiryTime) ? setAuthenticated(true) : handleLogout();
  
    setLoading(false);
  }, []);

  const handleLogin = async (e: any) => {

    e.preventDefault();

    const { email, password } = e.target;

    if (!email.value || !password.value)
      return handleShowModal("Preencha todos os campos");

    if (!isEmailValid(email.value))
      return handleShowModal("Email/Senha Incorreto(s)");

    const { result } = isPasswordValid(password.value);

    if (!result) 
      return handleShowModal("Email/Senha Incorreto(s)");

    const tokenExpiryTime = new Date().setHours(new Date().getHours() + 2).toString();

    setButtonChildren(<LoadingGif />);

    await api
      .post("/user/login", {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        setFormValues({});
        setButtonChildren("Login");
        nookies.set(undefined, "tokenFoodgram", data.response, { maxAge: 60 * 60 * 2 });
        nookies.set(undefined ,"tokenExpiryTimeFoodgram", tokenExpiryTime, { maxAge: 60 * 60 * 2 });
        api.defaults.headers = { "Authorization": `Bearer ${data.response}` } as CommonHeaderProperties;
        setAuthenticated(true);
        router.push("/feed");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

      setButtonChildren("Login");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    nookies.destroy(undefined, "tokenFoodgram");
    nookies.destroy(undefined, "tokenExpiryTimeFoodgram");
    api.defaults.headers = { "Authorization": undefined } as CommonHeaderProperties;
    router.push("/");
  };

  return { 
    handleLogin, 
    handleLogout, 
    authenticated, 
    loading,
    expirySession, 
    setExpirySession, 
    buttonChildren, 
    formValues, 
    setFormValues 
  };
};

export default useAuth;