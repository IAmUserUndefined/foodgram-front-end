/* eslint-disable @next/next/no-img-element */

import React from 'react';

import ContainerPhoto from './styles';

import { PhotoTypes } from "../../types";

type FeedPhotoTypes = {
    photo: PhotoTypes;
    name: string;
}

const FeedPhoto = ({ photo, name }: FeedPhotoTypes) => {
    
    const { url } = photo;

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