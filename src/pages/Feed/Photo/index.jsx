import React from 'react';

import ContainerPhoto from './styles';

const Photo = () => {
    return ( 
        <>
            <ContainerPhoto>
                <span>Por: João Pedro</span>
                <img src="images/pizza-demo.jpg" alt="" />
            </ContainerPhoto>
        </>
     );
}
 
export default Photo;