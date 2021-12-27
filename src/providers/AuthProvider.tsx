import React, { createContext, useContext, ReactElement } from "react";
import hook from "./hooks/useAuth";

type Values = {
  handleLogin: () => void,
  handleLogout: () => void,
  authenticated: boolean,
  loading: boolean,
  expirySession: boolean,
  setExpirySession: (value: boolean) => void,
  buttonChildren: string | ReactElement
}

const defaultValues = {
  handleLogin: () => "",
  handleLogout: () => "",
  setExpirySession: () => "",
  loading: true,
  authenticated: false,
  expirySession: false,
  buttonChildren: "Login",
}

const AuthContext = createContext<Values>(defaultValues);

export const AuthProvider: React.FC = ({ children }) => {

  const {
    handleLogin,
    handleLogout,
    authenticated,
    loading,
    expirySession,
    setExpirySession,
    buttonChildren,
  } = hook();

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        authenticated,
        loading,
        expirySession,
        setExpirySession,
        buttonChildren,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);