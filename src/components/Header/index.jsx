/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderStyle from "./styles";

const Header = () => {
    const navigate = useNavigate();
    const handleLink = (link) => navigate(link);

    return ( 
        <>
            <HeaderStyle>
                <div>
                    <img src="images/logo.png" alt="Logo da aplicação" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a onClick={() => handleLink("/main")}>Home</a>
                        </li>

                        <li>
                            <a onClick={() => handleLink("/add-photo")}>Fotos</a>
                        </li>

                        <li>
                            <a onClick={() => handleLink("/config-user")}>Configurações</a>
                        </li>

                        <li>
                            <a onClick={() => handleLink("/")}>Sair</a>
                        </li>
                    </ul>
                </nav>
            </HeaderStyle>
        </>
     );
}
 
export default Header;