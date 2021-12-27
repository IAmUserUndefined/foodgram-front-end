import { useState } from "react";

const useModal = (): any => {
  const [message, setMessage] = useState<string>("");
  const [display, setDisplay] = useState<string>("none");

  const handleShowModal = (message: string) => {
    setMessage(message);
    setDisplay("flex");
  }

  const handleCloseModal = (e: any) => {
    if (e.target.id !== "modal" && e.target.id !== "message") {
      setDisplay("none");
    }
  }

  return { message, display, handleShowModal, handleCloseModal };
}

export default useModal;