/* eslint-disable @next/next/no-img-element */

import React, { ReactElement } from 'react';
import Image from 'next/image';

import PagesContainerStyle from './styles';

import BannerImage from "../../assets/images/banner.svg";

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
                    <img 
                        src="/images/banner.svg" 
                        alt="Ilustração de uma pessoa com um sorvete gigante na palma da mão"  
                    />
                </div>
            </PagesContainerStyle>
        </>
     );
}
 
export default PagesContainer;