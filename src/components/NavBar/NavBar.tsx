import React from "react";
import { BoxBar, ConfigTitulo, LogoNavBar } from "./styledNavBar";
import Logo from '../../assets/logoBuscaFilm.svg'

const NavBar = () => {
    return(
        <>
            <BoxBar>
                <ConfigTitulo>BuscaFilm</ConfigTitulo>
                <LogoNavBar src={Logo} alt="Logo do BuscaFilm" />
            </BoxBar>
        </>
    );
}
export default NavBar;