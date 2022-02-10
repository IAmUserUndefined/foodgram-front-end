/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback } from "react";

import { useDropzone } from "react-dropzone";

import Header from "../../components/Header/index";
import PaddingContainer from "../../components/PaddingContainer/index";

import ListPhoto from "./ListPhoto/index";
import UploadImageMessage from "./styles";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const Photos = () => {

  const { handleShowModal } = useModal();
  
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0] === undefined) return null;

    const data = new FormData();

    data.append("file", acceptedFiles[0]);

    api
    .post('/photo', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .catch(({ response }) =>
      response
        ? handleShowModal(response.data.response)
        : handleShowModal("Erro no Servidor")
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: "image/jpeg, image/png",
      onDrop
  });

  return (
    <>
      <Header />

      <PaddingContainer>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
                {isDragReject ? (
                  <UploadImageMessage>
                    Esse tipo de arquivo não é permitido
                  </UploadImageMessage>
                ) : isDragActive ? (
                  <UploadImageMessage>Solte sua foto aqui</UploadImageMessage>
                ) : (
                  <UploadImageMessage>
                    Clique ou jogue a sua imagem aqui e espere alguns segundos, ela será publicada diretamente no feed de fotos
                  </UploadImageMessage>
                )}
          </div>

          <ListPhoto />
      </PaddingContainer>

    </>
  );
};

export default Photos;