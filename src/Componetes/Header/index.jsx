import React from 'react';
import { NavLink } from "react-router-dom";
import Lupa from '../../assets/lupa.png';
import NomeTitulo from '../../assets/nome.png'
import Styles from './Header.module.css';
import Logo from '../Logo/logo'

const Header = () => {
    return (
        <>
            <header>
                <Logo />
                <nav>
                    <div className={Styles.boxPesquisaForms}>
                        <div className={Styles.boxBarraPesquisa}>
                            <input className={Styles.barraPesquisa} type="text" placeholder="Pesquise Corridas, Carros, Pistas e mais..." />
                            <button className={Styles.buttonPesquisa}>
                                    <img src={Lupa} alt="Buscar" />
                            </button>
                        </div>
                        <NavLink to="/login" className={Styles.linkForms} >Entrar</NavLink>
                    </div>
                    <div className={Styles.boxAtalhos}>
                        <NavLink to="/" className={Styles.atalho} >Home</NavLink>
                        <NavLink to="/login" className={Styles.atalho} >Login</NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
