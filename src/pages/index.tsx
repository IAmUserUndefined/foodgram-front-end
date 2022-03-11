import React from "react";
import type { NextPage } from 'next';

import PublicRoute from "../components/PublicRoute";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import FormLink from "../components/FormLink";
import Logo from "../components/Logo"
import PagesContainer from "../components/PagesContainer";

import Form from "../styles/form";

import { useAuth } from "../providers/AuthProvider";

const Login: NextPage = () => {

  const { handleLogin, buttonChildren, formValues, setFormValues } = useAuth();

  return (
    <>
      <PagesContainer>
        <Form onSubmit={handleLogin}>
          <Logo />
          
          <h2>Login</h2>

          <FormInput type="email" name="email" placeholder="Email" formValues={formValues} setFormValues={setFormValues} />

          <FormInput type="password" name="password" placeholder="Senha" formValues={formValues} setFormValues={setFormValues} />

          <Button type="submit">
            {buttonChildren}
          </Button>

          <FormLink link="/register">Ainda não tem um cadastro?</FormLink>
          <FormLink link="/forget-password">Esqueceu sua senha?</FormLink>
        </Form>
      </PagesContainer>
    </>
  );
};

export default PublicRoute(Login);