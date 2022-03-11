import React, { useEffect } from "react";
import { useRouter } from 'next/router';

import VerifyEmailTitle from "../components/VerifyEmailTitle";

import api from "../services/api/clientApi";

import { useModal } from "../providers/ModalProvider";

const VerifyEmailUpdate = () => {
    const router = useRouter();
    const [, query] = router.asPath.split("?");
    const { handleShowModal } = useModal();
  
    useEffect(() => {
      const handleVerifyEmailUpdate = async () => {
        await api
          .patch(`/update-email?${query}`)
          .then(({ data }) => handleShowModal(data.response))
          .catch(({ response }) =>
            response
              ? handleShowModal(response.data.response)
              : handleShowModal("Erro no Servidor")
          );
      };
  
      handleVerifyEmailUpdate();
      router.push("/");
    });

    return ( 
        <>
            <VerifyEmailTitle />
        </>
     );
}
 
export default VerifyEmailUpdate;