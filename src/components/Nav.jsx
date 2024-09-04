import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavStyle } from '../styles/NavStyle';
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';

const Nav = () => {

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
    
    // Show Mobile
    const [showMobile, setShowMobile] = useState(false);
    const toggleMenu = () => {
        setShowMobile(!showMobile);
    }; 

    return (
        <>
        
        <NavStyle>
                <header>
                    {/* Left (Logo Mahindra) */}
                    <div id='left-nav'>
                        <a href='https://www.mahindraracing.com/' target='_blank'><img src={logoMahindra} alt='Logo Mahindra' /></a>
                    </div>

                    {/* Right (Nav Desktop and Nav Mobile) */}
                    <div id='right-nav'>
                        {/* Nav Desktop */}
                        <nav id='nav-desktop'>
                            <ul>
                                <li><a href='/'>{t('home')}</a></li>
                                <li><a href='/'>{t('about')}</a></li>
                                <li><a href='/'>{t('pilots')}</a></li>
                                <li><a href='/'>{t('ecotracer')}</a></li>

                                {/* Language */}
                                <div className='content-lng' onMouseEnter={handleMouseEnter}>
                                    <li>
                                        <a href=''>{t('language')}</a>
                                    </li>
                                    {showLanguages && (
                                        <ul onMouseLeave={handleMouseLeave}>
                                            <li><button onClick={() => changeLanguage('en')}>{t('english')}</button></li>
                                            <li><button onClick={() => changeLanguage('pt')}>{t('portuguese')}</button></li>
                                            <li><button onClick={() => changeLanguage('es')}>{t('spanish')}</button></li>
                                        </ul>
                                    )}
                                </div>
                            </ul>
                        </nav>

                        {/* Menu Hambúrguer (Mobile) */}
                        <div id='hamburger-menu' onClick={toggleMenu}>
                            <div className={showMobile ? 'bar open' : 'bar'}></div>
                            <div className={showMobile ? 'bar open' : 'bar'}></div>
                            <div className={showMobile ? 'bar open' : 'bar'}></div>
                        </div>

                        {/* Nav Mobile */}
                        <nav id='nav-mobile' className={showMobile ? 'open' : ''}>
                            <ul>
                                <li><a href='#'>{t('home')}</a></li>
                                <li><a href='#'>{t('about')}</a></li>
                                <li><a href='#'>{t('pilots')}</a></li>
                                <li><a href='#'>{t('ecotracer')}</a></li>

                                {/* Language */}
                                <div className='content-lng' onMouseEnter={handleMouseEnter}>
                                    <li>
                                        <p>{t('language')}</p>
                                    </li>
                                    {showLanguages && (
                                        <ul onMouseLeave={handleMouseLeave}>
                                            <li><button onClick={() => changeLanguage('en')}>{t('english')}</button></li>
                                            <li><button onClick={() => changeLanguage('pt')}>{t('portuguese')}</button></li>
                                            <li><button onClick={() => changeLanguage('es')}>{t('spanish')}</button></li>
                                        </ul>
                                    )}
                                </div>
                            </ul>
                        </nav>
                    </div>
                </header>
            </NavStyle>
        </>
    );
};

export default Nav;