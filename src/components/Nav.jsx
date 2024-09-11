import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, NavClose, NavOpen, OpenButton, ArrowIcon, NavTop, NavMid, NavBottom, Logo } from '../styles/NavStyle'; // Importando os componentes estilizados
import Arrow from '../assets/footer/arrow.svg'; // Supondo que Arrow é uma imagem
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'; // Supondo que esta seja a logo1

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    const handleMouseEnter = () => {
        setShowLanguages(true);
    };
    const handleMouseLeave = () => {
        setShowLanguages(false);
        setShowMobile(false);
    };

    return (
        <Container>
            {/* Menu lateral (NavMenu) */}
            <NavClose isOpen={isOpen}>
                <OpenButton onClick={toggleNav}>
                    <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow"/>
                </OpenButton>
            </NavClose>

            {/* Menu de navegação principal (NavStyle) */}
            <NavOpen isOpen={isOpen}>

                {/* Seção Topo */}
                <NavTop>
                    {/* Botão para fechar o menu */}
                    <OpenButton onClick={toggleNav}>
                        <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow"/>
                    </OpenButton>

                    {/* Logo */}
                    <Logo src={LogoMahindra} alt="Logo" />
                </NavTop>

                {/* Seção do Meio */}
                <NavMid>
                    <ul>
                        {/* Language */}
                        <div className='content-lng' onClick={handleMouseEnter}>
                            <li className='lgn-li'>
                                <img src={Arrow} alt="Arrow" />
                                <li>Language</li>
                            </li>
                            {showLanguages && (
                                <ul>
                                    <li><Link>English</Link></li>
                                    <li><Link>Portuguese</Link></li>
                                    <li><Link>Spanish</Link></li>
                                </ul>
                            )}
                        </div>

                        {/* Others Links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/app-mobile">App Mobile</Link></li>
                        <li><Link to="/edoardo-mortara">Edoardo Mortara</Link></li>
                        <li><Link to="/nicky-de-vries">Nicky de Vries</Link></li>
                        <li><Link to="/services">Races</Link></li>
                        <li><Link to="/car">Car</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        
                    </ul>
                </NavMid>

                {/* Seção Inferior */}
                <NavBottom />
            </NavOpen>
        </Container>
    );
};

export default Nav;
