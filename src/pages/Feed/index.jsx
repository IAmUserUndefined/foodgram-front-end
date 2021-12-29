import React from 'react';

import Header from "../../components/Header/index";
import PaddingContainer from "../../components/PaddingContainer/index";

import Photo from "./Photo/index";

const Feed = () => {
    return ( 
        <>
            <Header />
            
            <PaddingContainer>
                <Photo />
            </PaddingContainer>
        </>
     );
}
 
export default Feed;