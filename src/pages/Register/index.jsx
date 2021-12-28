import React from "react";

import Form from "../../styles/form";
import FormInput from "../../components/FormInput/index";
import Button from "../../components/Button/index";
import FormLink from "../../components/FormLink/index";
import Logo from "../../components/Logo/index"

import PagesContainer from "../../components/PagesContainer/index";

const Register = () => {
  return (
    <>
      <PagesContainer>
        <Form name="register">
          <Logo />
          
          <h2>Cadastro</h2>

          <FormInput type="email" name="email" placeholder="Email" />
          <FormInput type="password" name="password" placeholder="Senha" />
          <FormInput type="password" name="passwordConfirm" placeholder="Confirmação de Senha" />

          <Button>
            Cadastrar
          </Button>

          <FormLink link="/">Já tem um cadastro?</FormLink>
        </Form>
      </PagesContainer>
    </>
  );
};

export default Register;