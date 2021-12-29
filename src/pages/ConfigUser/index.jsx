import React from "react";

import Header from "../../components/Header/index";

import Form from "../../styles/form";
import FormInput from "../../components/FormInput/index";
import Button from "../../components/Button/index";
import PaddingContainer from "../../components/PaddingContainer/index";

import FormContainer from "./styles";

const ConfigUser = () => {
  return (
    <>
      <Header />

      <PaddingContainer>
          <FormContainer>
            <Form name="updateEmail">
                
              <h2>Atualizar Email</h2>

              <FormInput type="email" placeholder="Email" name="email" />

              <Button onClick={() => console.log()}>Atualizar Email</Button>

            </Form>
          </FormContainer>

          <FormContainer>
            <Form name="updatePassword">
              <h2>Atualizar Senha</h2>

              <FormInput
                type="password"
                placeholder="Senha Atual"
                name="passwordCurrent"
              />

              <FormInput
                type="password"
                placeholder="Nova Senha"
                name="newPassword"
              />

              <FormInput
                type="password"
                placeholder="Confirmação de Nova Senha"
                name="newPasswordConfirm"
              />

              <Button onClick={() => console.log()}>Atualizar Senha</Button>
            </Form>
          </FormContainer>

          <FormContainer>
            <Form name="deleteUser">
              <h2>Excluir Usuário</h2>

              <FormInput 
                type="password" 
                placeholder="Senha" 
                name="password" 
              
              />
              <FormInput
                type="password"
                placeholder="Confirmação de Senha"
                name="passwordConfirm"
              />
              <Button onClick={() => console.log()}>Excluir Usuário</Button>
            </Form>
          </FormContainer>
      </PaddingContainer>
    </>
  );
};

export default ConfigUser;