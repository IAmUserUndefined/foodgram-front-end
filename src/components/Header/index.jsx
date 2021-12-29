/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import { HeaderStyle, IconMenu, Navigation, ContainerImage } from "./styles";

import { useAuth } from "../../providers/AuthProvider";

const Header = () => {
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const handleLink = (link) => navigate(link);
    const [left, setLeft] = useState(`${-1000}px`);
    const [icon, setIcon] = useState(<AiOutlineMenu onClick={() => showMenu()} />)
    const showMenu = () => {
        setIcon(<AiOutlineCloseCircle onClick={() => {
            setIcon(<AiOutlineMenu onClick={() => showMenu()} />);
            setLeft(`${-1000}px`);
        }} />);
        setLeft(0);
    };

    return ( 
        <>
            <HeaderStyle>
                <ContainerImage>
                    <img src="images/logo.png" alt="Logo da aplicação" />
                </ContainerImage>
                <IconMenu>
                    {icon}
                </IconMenu>
                <Navigation left={left}>
                    <ul>
                        <li>
                            <a onClick={() => handleLink("/feed")}>Feed</a>
                        </li>

                        <li>
                            <a onClick={() => handleLink("/photos")}>Fotos</a>
                        </li>

                        <li>
                            <a onClick={() => handleLink("/config-user")}>Configurações</a>
                        </li>

                        <li>
                            <a onClick={() => handleLogout()}>Sair</a>
                        </li>
                    </ul>
                </Navigation>
            </HeaderStyle>
        </>
     );
}
 
export default Header;