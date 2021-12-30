/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/index";
import PaddingContainer from "../../components/PaddingContainer/index";

import FeedPhoto from "./FeedPhoto/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const Feed = () => {

    const [photos, setPhotos] = useState([]);
    const { handleShowModal } = useModal();

    useEffect(() => {
      let mounted = true;
  
        const fetchPhotos = async () => {
            await api
            .get("/photo")
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
            <Header />
            
            <PaddingContainer>
                {
                    photos.map((photo) => (
                        <FeedPhoto key={photo.id} url={photo.url} author={photo.author} />
                    ))
                }
            </PaddingContainer>
        </>
     );
}
 
export default Feed;