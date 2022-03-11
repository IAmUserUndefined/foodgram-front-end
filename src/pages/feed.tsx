/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { GetServerSideProps } from 'next';

import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";
import PaddingContainer from "../components/PaddingContainer";

import FeedPhoto from "../components/FeedPhoto";

import api from "../services/api/serverApi";
import auth from "../services/auth";

import { PhotoTypes } from "../types";

type FeedTypes = {
    photos: PhotoTypes[];
}

const Feed = ({ photos }: FeedTypes) => {

    return ( 
        <>
            <Header />
            
            <PaddingContainer>
                {
                        photos.map((photo: PhotoTypes) => (
                            <FeedPhoto key={photo.id} photo={photo} />
                        ))
                }
            </PaddingContainer>
        </>
     );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    if(auth(context))
        return auth(context);
  
    const fetch = await api(context)
                        .get("/photo")
                        .then(({ data }) => data);
  
    const photos = await fetch.response;
  
    return {
          props: {
            photos
        }
    }
}
 
export default Feed;