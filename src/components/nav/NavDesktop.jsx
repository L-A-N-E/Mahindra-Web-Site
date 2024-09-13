import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavDesktopClose, NavDesktopOpen, OpenButton, ArrowIcon, NavTop, NavMid, NavBottom, Logo } from '../../styles/NavStyle'; // Importando os componentes estilizados
import Arrow from '../../assets/footer/arrow.svg'; // Supondo que Arrow é uma imagem
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'; // Supondo que esta seja a logo1

const NavDesktop = () => {
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
            <NavDesktopClose isOpen={isOpen}>
                {/* Button to Open Menu */}
                <OpenButton onClick={toggleNav}>
                    <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow"/>
                </OpenButton>
            </NavDesktopClose>

            {/* Menu de navegação principal (NavStyle) */}
            <NavDesktopOpen isOpen={isOpen}>

                {/* Seção Topo */}
                <NavTop>
                    {/* Button to Close Menu */}
                    <OpenButton onClick={toggleNav}>
                        <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow"/>
                    </OpenButton>

                    {/* Logo */}
                    <Logo src={LogoMahindra} alt="Logo" />
                </NavTop>

                {/* Seção do Meio */}
                <NavMid showLanguages={showLanguages}>
                    <ul>
                        {/* Others Links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/app-mobile">App Mobile</Link></li>
                        <li><Link to="/edoardo-mortara">Edoardo Mortara</Link></li>
                        <li><Link to="/nicky-de-vries">Nicky de Vries</Link></li>
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
                </NavMid>

                {/* Seção Inferior */}
                <NavBottom />
            </NavDesktopOpen>
        </>
    );
};

export default NavDesktop;
