/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { GetServerSideProps } from 'next';

import Header from "../components/Header";
import PaddingContainer from "../components/PaddingContainer";

import FeedPhoto from "../components/FeedPhoto";

import api from "../services/api/serverApi";
import auth from "../services/auth";

import { PhotoTypes } from "../types";

type FeedTypes = {
    photos: PhotoTypes[];
    names: string[];
}

const Feed = ({ photos, names }: FeedTypes) => {

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
  
    const fetchPhotos = await api(context)
                                .get("/photo")
                                .then(({ data }) => data);
  
    const photos: PhotoTypes[] = await fetchPhotos.response;
    const names: string[] = [];

    for(let i = 0; i < photos.length; i++) {
        const { ["response"]: name } = await api(context)
                                                .post("/get-name", { userId: photos[i].userId })
                                                .then(({ data }) => data);

        names.push(name);
    }
  
    return {
          props: {
            photos,
            names
        }
    }
}
 
export default Feed;