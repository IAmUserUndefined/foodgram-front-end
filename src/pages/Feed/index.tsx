/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/index";
import PaddingContainer from "../../components/PaddingContainer/index";

import FeedPhoto from "./FeedPhoto/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

type PhotoTypes = {
    id: string;
    url: string;
    userId: string
}

const Feed = () => {

    const [photos, setPhotos] = useState([]);
    const { handleShowModal } = useModal();

    useEffect(() => {
        let mounted = true;
  
        const fetchPhotos = async () => {
            await api
            .get("/photo")
            .then(({ data }) => (
                mounted ? setPhotos(data.response) : null
            ))
            .catch(({ response }) =>
                response === undefined ? handleShowModal("Erro no servidor, as fotos não podem ser apresentadas") : null
            );
        };
  
        fetchPhotos();
  
        return () => {
            mounted = false;
            return;
        };
    }, [photos]);

    return ( 
        <>
            <Header />
            
            <PaddingContainer>
                {
                        photos.map((photo: PhotoTypes) => (
                            <FeedPhoto key={photo.id} url={photo.url} userId={photo.userId} />
                        ))
                }
            </PaddingContainer>
        </>
     );
}
 
export default Feed;