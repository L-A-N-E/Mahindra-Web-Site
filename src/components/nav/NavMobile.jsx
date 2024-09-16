import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavMobileClose, NavMobileOpen, OpenButton, XIcon, HamburguerIcon, NavTopMobile, NavMidMobile, NavMidMobileMini, NavBottomMobile, Logo, SignUpButton, LoginButton } from '../../styles/NavStyle'; // Importando os componentes estilizados
import Arrow from '../../assets/footer/arrow.svg'; // Supondo que Arrow é uma imagem
import X from '../../assets/header/buttons/remove.png';
import MenuIcon from '../../assets/header/buttons/menu.png';
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
                    <HamburguerIcon isOpen={isOpen} src={MenuIcon} alt="Menu"/>
                </OpenButton>
                    <Logo src={LogoMahindra} alt="Logo"/>
                    <SignUpButton><Link to={'/sign-up'}><button class='sig'>Sign-Up</button></Link></SignUpButton>
                    <LoginButton><Link to={'/login'}><button class='log'>Login</button></Link></LoginButton>
            </NavMobileClose>

            {/* Menu de navegação principal*/}
            <NavMobileOpen isOpen={isOpen}>
                <NavTopMobile>
                    {/* Button to Close Menu*/}
                    <OpenButton onClick={toggleNav}>
                        <XIcon isOpen={isOpen} src={X} alt="X"/>
                    </OpenButton>
                </NavTopMobile>

                {/* Seção do Meio */}
                <NavMidMobile showLanguages={showLanguages}>
                    <ul>
                        {/* Links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/app-mobile">App</Link></li>
                        <li><Link to="/edoardo-mortara">Edoardo</Link></li>
                        <li><Link to="/nicky-de-vries">Nicky</Link></li>
                        <li><Link to="/races">Races</Link></li>
                        
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
                <NavMidMobileMini showLanguages={showLanguages}>
                    <ul>
                        {/* Links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/races">Races</Link></li>
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
                </NavMidMobileMini>
                <NavBottomMobile/>
            </NavMobileOpen>
        </>
    );
};

export default NavMobile;