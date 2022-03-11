/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';

import Photo from "./Photo/index";

import { useModal } from "../../providers/ModalProvider";

import { PhotoTypes } from '../../types';

type ListPhotoTypes = {
    photos: PhotoTypes[];
}

const ListPhoto = ({ photos }: ListPhotoTypes) => {

    const { handleShowModal } = useModal();

    return ( 
        <>
                {
                    photos.map((photo: PhotoTypes) => (
                        <Photo key={photo.id} photo={photo} />
                    ))
                }
        </>
     );
}
 
export default ListPhoto;