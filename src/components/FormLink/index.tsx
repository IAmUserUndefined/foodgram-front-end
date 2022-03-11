import React from 'react';
import Link from 'next/link';

import FormLinkContainer from './styles';

type LinkTypes = {
    link: string,
    children: string
}

const FormLink = ( { link, children }: LinkTypes ) => {

    return ( 
        <>
            <div>
                <FormLinkContainer>
                    <Link href={link} passHref>
                        { children }
                    </Link>
                </FormLinkContainer>
            </div>
        </>
     );
}
 
export default FormLink;