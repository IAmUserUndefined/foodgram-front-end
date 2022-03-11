/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MdOutlineDelete } from "react-icons/md";

import { FileListContainer, ImageContainer, IconContainer } from "./styles";

import api from "../../../services/api/clientApi";

import { useModal } from "../../../providers/ModalProvider";

import { PhotoTypes } from "../../../types";

type PhotoComponentTypes = {
    photo: PhotoTypes;
}

const PhotoComponent = ({ photo }: PhotoComponentTypes) => {

    const { url, id, key } = photo;
    const { handleShowModal } = useModal();
    const router = useRouter();

    const handlePhotoDeletion = async (photoId: string, keyName: string) => {
      await api
        .delete(`/photo/${photoId}/${keyName}`)
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
        
        router.push("photos");
    };

    return ( 
        <>
            <FileListContainer>
                <ImageContainer>
                    <img src={url} alt="Imagem de um alimento" />
                </ImageContainer>
                <IconContainer>
                    <MdOutlineDelete style={{ cursor: "pointer" }} color="#f00" onClick={() => handlePhotoDeletion(id, key)} />
                </IconContainer>
            </FileListContainer>
        </>
     );
}
 
export default PhotoComponent;