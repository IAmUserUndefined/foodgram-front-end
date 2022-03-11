/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ContainerPhoto from './styles';

import api from "../../services/api/clientApi";

import { PhotoTypes } from "../../types";

type FeedPhotoTypes = {
    photo: PhotoTypes;
}

const FeedPhoto = ({ photo }: FeedPhotoTypes) => {
    
    const { url, userId } = photo
    const [name, setName] = useState("");

    useEffect(() => {
        let mounted = true;

        const fetchPhotos = async () => {
            await api
            .post("/get-name", {
                userId: userId,
              })
            .then(({ data }) => (mounted ? setName(data.response) : null))
            .catch(({ response }) =>
                response === undefined ? console.log("Erro no servidor") : null
            );
        };
  
        fetchPhotos();

        return () => {
            mounted = false;
            return;
        };

    }, []);

    return ( 
        <>
            <ContainerPhoto>
                <span>Por: {name}</span>
                <img src={url} alt="Foto de um alimento" />
            </ContainerPhoto>
        </>
     );
}
 
export default FeedPhoto;