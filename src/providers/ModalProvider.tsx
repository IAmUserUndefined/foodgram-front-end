import React, { createContext, useContext } from "react";
import hook from "./hooks/useModal";

type Values = {
  message: string,
  display: string,
  handleShowModal: (message: string) => void,
  handleCloseModal: (e: any) => void
}

const defaultValues = {
  message: "",
  display: "none",
  handleShowModal: () => "",
  handleCloseModal: () => "",
}

const ModalContext = createContext<Values>(defaultValues);

export const ModalProvider: React.FC = ({ children }) => {
  
  const { message, display, handleShowModal, handleCloseModal } = hook();

  return(
    <ModalContext.Provider value={{ message, display, handleShowModal, handleCloseModal }}>
      { children }
    </ModalContext.Provider>
  )
}
export const useModal = () => useContext(ModalContext);