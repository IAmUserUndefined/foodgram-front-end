/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Header from "../components/Header";
import PaddingContainer from "../components/PaddingContainer";

import FeedPhoto from "../components/FeedPhoto";

import api from "../services/api/serverApi";
import auth from "../services/auth";

import { useModal } from '../providers/ModalProvider';

import { PhotoTypes } from "../types";

type FeedTypes = {
    photos: PhotoTypes[];
    names: string[];
    error: string;
}

const Feed = ({ photos, names, error }: FeedTypes) => {
    const { handleShowModal } = useModal();

    useEffect(() => {
        const modal = () => error ? handleShowModal(error) : null;

        modal();
    }, []);

    return ( 
        <>
            <Header />
            
            <PaddingContainer>
                {
                        photos.map((photo: PhotoTypes, i: number) => (
                            <FeedPhoto key={photo.id} photo={photo} name={names[i]} />
                        ))
                }
            </PaddingContainer>
        </>
     );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    if(auth(context))
        return auth(context);
  
    const { ["response"]: fetchPhotos, error } = await api(context)
                                .get("/photo")
                                .then(({ data }) => data)
                                .catch(({ response }) => 
                                    response === undefined ? {
                                        response: [],
                                        error: "Erro no servidor, as fotos não podem ser apresentadas"
                                    } : null
                                );
  
    const photos: PhotoTypes[] = await fetchPhotos;
    const names: string[] = [];

    if(photos.length > 0) {

        for(let i = 0; i < photos.length; i++) {
            const name = await api(context)
                                        .post("/get-name", { userId: photos[i].userId })
                                        .then(({ data }) => data.response);
    
            names.push(name);
        }
    }
  
    return {
          props: {
            photos,
            names,
            error: error || null
        }
    }
}
 
export default Feed;