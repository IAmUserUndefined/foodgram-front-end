import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PublicRoute from "../components/PublicRoute";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import Logo from "../components/Logo"
import PagesContainer from "../components/PagesContainer";
import LoadingGif from "../components/LoadingGif";

import Form from "../styles/form";

import api from "../services/api/clientApi";

import isPasswordValid from "../utils/isPasswordValid";

import { useModal } from "../providers/ModalProvider";

const RecoverPassword: NextPage = () => {
  const router = useRouter();
  const [, query] = router.asPath.split("?");
  const { handleShowModal } = useModal();
  const [formValues, setFormValues] = useState({});
  const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Atualizar Senha");

  const handleRecoverPassword = async (e: any) => {
    e.preventDefault();

    const { password, passwordConfirm } = e.target;

    if (!password.value || !passwordConfirm.value)
      return handleShowModal("Preencha todos os campos");

    const { result, message } = isPasswordValid(password.value);

    if (!result) return handleShowModal(message);

    setButtonChildren(<LoadingGif />);

    await api
      .patch(`/user/password/password-recover?${query}`, {
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        setFormValues({});
        handleShowModal(data.response);
        router.push("/");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

    setButtonChildren("Atualizar Senha");
  };

  return (
    <>
      <PagesContainer>
        <Form onSubmit={handleRecoverPassword}>
          <Logo />
          
          <h2>Recuperação de Senha</h2>
              <FormInput
                  type="password"
                  placeholder="Nova Senha"
                  name="password"
                  formValues={formValues}
                  setFormValues={setFormValues}
              />
  
              <FormInput
                type="password"
                placeholder="Confirmação de Nova Senha"
                name="passwordConfirm"
                formValues={formValues}
                setFormValues={setFormValues}
              />

            <Button type="submit">
              {buttonChildren}
            </Button>

        </Form>
      </PagesContainer>
    </>
  );
};

export default PublicRoute(RecoverPassword);