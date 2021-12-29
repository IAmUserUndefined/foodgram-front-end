import React from "react";

import Form from "../../styles/form";
import FormInput from "../../components/FormInput/index";
import Button from "../../components/Button/index";
import Logo from "../../components/Logo/index"
import PagesContainer from "../../components/PagesContainer/index";

const RecoverPassword = () => {
  return (
    <>
      <PagesContainer>
        <Form name="recoverPassword">
          <Logo />
          
          <h2>Recuperação de Senha</h2>

            <FormInput
                type="password"
                placeholder="Nova Senha"
                name="password"
            />

            <FormInput
            type="password"
            placeholder="Confirmação de Nova Senha"
            name="passwordConfirm"
            />

          <Button>
            Atualizar Senha
          </Button>

        </Form>
      </PagesContainer>
    </>
  );
};

export default RecoverPassword;