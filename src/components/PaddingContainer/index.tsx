import React, { ReactElement } from 'react';

type PaddingContainerTypes = {
    children: ReactElement | ReactElement[]
}

const PaddingContainer = ({ children }: PaddingContainerTypes) => {
    return ( 
        <>
            <main style={{ padding: ".9rem" }}>
                { children }
            </main>
        </>
     );
}
 
export default PaddingContainer;