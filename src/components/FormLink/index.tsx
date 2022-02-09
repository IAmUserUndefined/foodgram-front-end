import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormLinkStyle from './styles';

type LinkTypes = {
    link: string,
    children: string
}

const FormLink = ( { link, children }: LinkTypes ) => {
    const navigate = useNavigate();

    const handleLink = (link: string) => navigate(link);

    return ( 
        <>
            <div>
                <FormLinkStyle onClick={() => handleLink(link)}>
                    { children }
                </FormLinkStyle>
            </div>
        </>
     );
}
 
export default FormLink;