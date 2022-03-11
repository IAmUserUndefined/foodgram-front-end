import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return ( 
        <div>
             <Image src="/images/logo.png" alt="Logo da Aplicação" width={390} height={70} />
        </div>
     );
}
 
export default Logo;