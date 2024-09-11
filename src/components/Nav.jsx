import React, { useState, useRef, useEffect } from 'react';
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
        <Container>
            {/* Menu lateral (NavMenu) */}
            <NavClose isOpen={isOpen}>
                <OpenButton onClick={toggleNav}>
                    <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow" />
                </OpenButton>
            </NavClose>

            {/* Menu de navegação principal (NavStyle) */}
            <NavOpen isOpen={isOpen}>

                {/* Seção Topo */}
                <NavTop>
                    {/* Botão para fechar o menu */}
                    <OpenButton onClick={toggleNav}>
                        <ArrowIcon isOpen={isOpen} src={Arrow} alt="Arrow" />
                    </OpenButton>

                    {/* Logo */}
                    <Logo src={LogoMahindra} alt="Logo" />
                </NavTop>

                {/* Seção do Meio */}
                <NavMid showLanguages={showLanguages}>
                    <ul>
                        {/* Others Links */}
                        <li><Link to="/">{t("home")}</Link></li>
                        <li><Link to="/about">{t("about")}</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        
                        {/* Language */}
                        <div className='content-lng' onClick={handleMouseEnter} ref={menuRef}>
                            <li className='lgn-li'>
                                <img src={Arrow} alt="Arrow" />
                                <li>{t("language")}</li>
                            </li>
                            <ul className='lgn-link'>
                                <li onClick={() => changeLanguage('en')}><Link>{t("english")}</Link></li>
                                <li onClick={() => changeLanguage('pt')}><Link>{t("portuguese")}</Link></li>
                                <li onClick={() => changeLanguage('es')}><Link>{t("spanish")}</Link></li>
                            </ul>
                        </div>

                    </ul>
                </NavMid>

                {/* Seção Inferior */}
                <NavBottom />
            </NavOpen>
        </Container>
    );
};

export default Nav;
