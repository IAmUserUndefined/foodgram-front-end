/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback } from "react";
import { GetServerSideProps } from "next/types";
import { useRouter } from "next/router";

import { useDropzone } from "react-dropzone";

import Header from "../components/Header";
import PaddingContainer from "../components/PaddingContainer";
import ListPhoto from "../components/ListPhoto";

import UploadImageMessage from "../styles/pages/photos";

import clientApi from "../services/api/clientApi";
import serverApi from "../services/api/serverApi";
import auth from "../services/auth";

import { useModal } from "../providers/ModalProvider";

import { PhotoTypes } from "../types";

type PhotosTypes = {
  photos: PhotoTypes[];
}

const Photos = ({ photos }: PhotosTypes) => {

  const { handleShowModal } = useModal();
  const router = useRouter();
  
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles[0] === undefined) return null;

    const data = new FormData();

    data.append("file", acceptedFiles[0]);

    await clientApi
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

    router.push("/photos");
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

          <ListPhoto photos={photos} />
      </PaddingContainer>

    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  if(auth(context))
    return auth(context);

  const fetch = await serverApi(context)
                        .get("/user-photo")
                        .then(({ data }) => data)
                        .catch((response) => response);

  const photos = await fetch.response;

  return {
        props: {
          photos
        }
    }
}

export default Photos;