/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import { HeaderStyle, IconMenu, Navigation, ContainerImage } from "./styles";

import { useAuth } from "../../providers/AuthProvider";

const Header = () => {
    const { handleLogout } = useAuth();
    const [left, setLeft] = useState(`${-1000}px`);
    const [icon, setIcon] = useState(<AiOutlineMenu onClick={() => showMenu()} />)
    const showMenu = () => {
        setIcon(<AiOutlineCloseCircle onClick={() => {
            setIcon(<AiOutlineMenu onClick={() => showMenu()} />);
            setLeft(`${-1000}px`);
        }} />);
        setLeft("0");
    };

    return ( 
        <>
            <HeaderStyle>
                <ContainerImage>
                    <img src="/images/logo.png" alt="Logo da Aplicação" />
                </ContainerImage>
                <IconMenu>
                    {icon}
                </IconMenu>
                <Navigation left={left}>
                    <ul>
                        <li>
                            <Link href="/feed">Feed</Link>
                        </li>

                        <li>
                            <Link href="/photos">Fotos</Link>
                        </li>

                        <li>
                            <Link href="/config-user">Configuração do Usuário</Link>
                        </li>

                        <li onClick={() => handleLogout()}>
                            <a>Sair</a>
                        </li>
                    </ul>
                </Navigation>
            </HeaderStyle>
        </>
     );
}
 
export default Header;