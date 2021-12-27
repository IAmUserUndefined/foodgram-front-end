import React, { useState, useEffect, ReactElement } from "react";

import api, { CommonHeaderProperties } from "../../services/api";
import history from "../../services/browserHistory";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../ModalProvider";

import LoadingBigGif from "../../components/LoadingBigGif/index";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [expirySession, setExpirySession] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Login");
  const { handleShowModal } = useModal();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiryTime = localStorage.getItem("tokenExpiryTime");
    const tokenExpiryTimeValue = tokenExpiryTime ? parseInt(tokenExpiryTime) : 0;

    if (token) {
      if(Date.now() < tokenExpiryTimeValue) {
        setAuthenticated(true);
      }else{
        setExpirySession(true);
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async () => {
    setButtonChildren(<LoadingBigGif />);

    const form = document.forms[0];

    let { email, password } = form;

    if (!email.value || !password.value) {
      setButtonChildren("Login");
      return handleShowModal("Preencha todos os campos");
    }

    if (!isEmailValid(email.value)) {
      email.value = "";
      password.value = "";
      setButtonChildren("Login");
      return handleShowModal("Email/Senha Incorreto(s)");
    }

    const { result } = isPasswordValid(password.value);

    if (!result) {
      email.value = "";
      password.value = "";
      setButtonChildren("Login");
      return handleShowModal("Email/Senha Incorreto(s)");
    }

    await api
      .post("/user/login", {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        setButtonChildren("Login");
        localStorage.setItem("token", data.response);
        localStorage.setItem("tokenExpiryTime", new Date().setHours(new Date().getHours() + 2).toString());
        api.defaults.headers = { "Authorization": `Bearer ${data.response}` } as CommonHeaderProperties;
        setAuthenticated(true);
        history.push("/tasks");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

      email.value = "";
      password.value = "";

      setButtonChildren("Login");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiryTime");
    api.defaults.headers = { "Authorization": undefined } as CommonHeaderProperties;
    history.push("/");
  };

  return { handleLogin, handleLogout, authenticated, loading, expirySession, setExpirySession, buttonChildren };
};

export default useAuth;