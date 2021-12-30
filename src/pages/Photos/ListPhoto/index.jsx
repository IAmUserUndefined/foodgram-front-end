/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';

import Photo from "./Photo/index";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

const ListPhoto = () => {

    const [photos, setPhotos] = useState([]);
    const { handleShowModal } = useModal();

    useEffect(() => {
      let mounted = true;
  
        const fetchPhotos = async () => {
            await api
            .get("/user-photo")
            .then(({ data }) => (mounted ? setPhotos(data.response) : null))
            .catch(({ response }) =>
                response === undefined ? handleShowModal("Erro no servidor, as fotos não podem ser apresentadas") : null
            );
        };
  
      fetchPhotos();
  
      return () => mounted = false;
    }, [photos]);

    return ( 
        <>
                {
                    photos.map((photo) => (
                        <Photo key={photo.id} url={photo.url} id={photo.id} keyName={photo.key} />
                    ))
                }
        </>
     );
}
 
export default ListPhoto;