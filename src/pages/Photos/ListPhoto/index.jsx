import React from 'react';

import { MdOutlineDelete } from "react-icons/md";

import { FileListContainer } from "./styles";

const ListPhoto = () => {
    return ( 
        <>
            <FileListContainer>
                <div>
                    <img src="images/pizza-demo.jpg" alt="" />
                </div>
                <div>
                    <MdOutlineDelete  style={{ cursor: "pointer" }} color="#f00" />
                </div>
            </FileListContainer>
        </>
     );
}
 
export default ListPhoto;