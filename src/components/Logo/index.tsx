import React from 'react';

import LogoImage from "../../assets/images/logo.png";

const Logo = () => {
    return ( 
        <div>
            <img src={LogoImage} alt="Logo da aplicação" style={{ width: "60%" }}/>
        </div>
     );
}
 
export default Logo;