import React from 'react';

const PaddingContainer = ({ children }) => {
    return ( 
        <>
            <div style={{ padding: ".9rem" }}>
                { children }
            </div>
        </>
     );
}
 
export default PaddingContainer;