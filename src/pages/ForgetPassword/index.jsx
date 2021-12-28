import React from "react";

import Form from "../../styles/form";
import FormInput from "../../components/FormInput/index";
import Button from "../../components/Button/index";
import FormLink from "../../components/FormLink/index";
import Logo from "../../components/Logo/index"

import PagesContainer from "../../components/PagesContainer/index";

const ForgetPassword = () => {
  return (
    <>
      <PagesContainer>
        <Form name="forgetPassword">
          <Logo />
          
          <h2>Esqueci Minha Senha</h2>

          <FormInput type="email" name="email" placeholder="Email" />

          <Button>
            Enviar Email
          </Button>

          <FormLink link="/">Lembrou sua senha?</FormLink>
        </Form>
      </PagesContainer>
    </>
  );
};

export default ForgetPassword;