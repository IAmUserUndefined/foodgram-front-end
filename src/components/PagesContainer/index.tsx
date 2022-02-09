import React, { ReactElement } from 'react';

import PagesContainerStyle from './styles';

type PagesContainerTypes = {
    children: ReactElement
}

const PagesContainer = ( { children }: PagesContainerTypes ) => {
    return ( 
        <>
            <PagesContainerStyle>
                <div>
                    { children }
                </div>

                <div>
                    <img src="images/banner.svg" alt="Ilustração de uma pessoa com um sorvete gigante na palma da mão" />
                </div>
            </PagesContainerStyle>
        </>
     );
}
 
export default PagesContainer;