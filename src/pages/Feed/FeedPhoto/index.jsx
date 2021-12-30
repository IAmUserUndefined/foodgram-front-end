import React from 'react';

import ContainerPhoto from './styles';

const Feed = ({ url, author }) => {
    return ( 
        <>
            <ContainerPhoto>
                <span>Por: João Pedro</span>
                <img src={url} alt="Foto de um alimento" />
            </ContainerPhoto>
        </>
     );
}
 
export default Feed;