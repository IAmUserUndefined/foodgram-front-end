import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { NextPage } from "next";

import PublicRoute from "../components/PublicRoute";
import VerifyEmailTitle from "../components/VerifyEmailTitle";

import api from "../services/api/clientApi";

import { useModal } from "../providers/ModalProvider";

const VerifyEmail: NextPage = () => {
    const router = useRouter();
    const [, query] = router.asPath.split("?");
    const { handleShowModal } = useModal();

    useEffect(() => {
        const handleVerifyEmail = async () => {
        await api
            .post(`/verify-email?${query}`)
            .then(({ data }) => handleShowModal(data.response))
            .catch(({ response }) =>
            response
                ? handleShowModal(response.data.response)
                : handleShowModal("Erro no Servidor")
            );
        };
        handleVerifyEmail();
        router.push("/");
    });

        return ( 
            <>
                <VerifyEmailTitle />
            </>
        );
}
 
export default PublicRoute(VerifyEmail);