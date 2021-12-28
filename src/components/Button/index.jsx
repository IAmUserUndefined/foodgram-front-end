import React from 'react';

import ButtonStyle from './styles';

const Button = ({ children }) => {
    return ( 
        <>
            <div>
                <ButtonStyle>
                    {children}
                </ButtonStyle>
            </div>
        </>
     );
}
 
export default Button;