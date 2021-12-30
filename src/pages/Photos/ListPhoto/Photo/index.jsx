import React from 'react';

import { MdOutlineDelete } from "react-icons/md";

import { FileListContainer, ImageContainer, IconContainer } from "./styles";

import api from "../../../../services/api";

import { useModal } from "../../../../providers/ModalProvider";

const Photo = ({ url, id, keyName }) => {

    const { handleShowModal } = useModal();

    const handlePhotoDeletion = async (photoId, keyName) => {
      await api
        .delete(`/photo/${photoId}/${keyName}`)
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };

    return ( 
        <>
            <FileListContainer>
                <ImageContainer>
                    <img src={url} alt="Imagem de um alimento" />
                </ImageContainer>
                <IconContainer>
                    <MdOutlineDelete style={{ cursor: "pointer" }} color="#f00" onClick={() => handlePhotoDeletion(id, keyName)} />
                </IconContainer>
            </FileListContainer>
        </>
     );
}
 
export default Photo;