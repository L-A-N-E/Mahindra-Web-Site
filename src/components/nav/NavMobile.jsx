import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavMobileClose, NavMobileOpen, OpenButton, ArrowIcon, NavTopMobile, NavMidMobile, NavBottom, Logo } from '../../styles/NavStyle'; // Importando os componentes estilizados
import Arrow from '../../assets/footer/arrow.svg'; // Supondo que Arrow é uma imagem
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'; // Supondo que esta seja a logo1

const NavMobile = () => {
    // Open Menu
    const [isOpen, setIsOpen] = useState(true);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    // Show Options
    const [showLanguages, setShowLanguages] = useState(false);
    const menuRef = useRef(null);

    // Alterna o estado showLanguages quando o menu é clicado
    const handleMouseEnter = () => {
        setShowLanguages(prevState => !prevState);
    };

    // Verifica se o clique foi fora do elemento referenciado. Se for, oculta o menu.
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowLanguages(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Menu lateral (NavMenu) */}
            <NavMobileClose isOpen={isOpen}>
                {/* Button to Open Menu */}
                <OpenButton onClick={toggleNav}>
                    {/* Logo  add o icone do menu de abrir*/}
                    <Logo src={LogoMahindra} isOpen={isOpen} alt="Logo"/>
                </OpenButton>
            </NavMobileClose>

            {/* Menu de navegação principal (NavStyle) */}
            <NavMobileOpen isOpen={isOpen}>
                {/* Seção Topo */}
                <NavTopMobile>
                    {/* Button to Close Menu - add o icone de fechar */}
                    <OpenButton onClick={toggleNav}>
                        <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow"/>
                    </OpenButton>
                </NavTopMobile>

                {/* Seção do Meio */}
                <NavMidMobile showLanguages={showLanguages}>
                    <ul>
                        {/* Others Links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/app-mobile">App</Link></li>
                        <li><Link to="/edoardo-mortara">Edoardo</Link></li>
                        <li><Link to="/nicky-de-vries">Nicky</Link></li>
                        <li><Link to="/races">Races</Link></li>
                        <li><Link to="/car">Car</Link></li>
                        
                        {/* Language */}
                        <div className='content-lng' ref={menuRef} onMouseLeave={handleMouseEnter}>
                            <li className='lgn-li' onMouseEnter={handleMouseEnter}>
                                <img src={Arrow} alt="Arrow" />
                                <li>{t("language")}</li>
                            </li>
                            <ul className='lgn-link'>
                                <li onClick={() => changeLanguage('en')}><a>{t("english")}</a></li>
                                <li onClick={() => changeLanguage('pt')}><a>{t("portuguese")}</a></li>
                                <li onClick={() => changeLanguage('es')}><a>{t("spanish")}</a></li>
                            </ul>
                        </div>
                    </ul>
                </NavMidMobile>

                {/* Seção Inferior */}
                <NavBottom />
            </NavMobileOpen>
        </>
    );
};

export default NavMobile;