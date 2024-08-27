import React from 'react'
import { NavStyle } from '../styles/NavStyle'
import { useTranslation } from 'react-i18next'

const Nav = () => {

    // Language
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    // Options Language


    return (
        <>
        <NavStyle>
            <header>
                {/* Left (Logo Mahindra) */}
                <div id='left-nav'>
                    <img src="#" alt="Logo Mahindra" />
                </div>

                {/* Right (Nav Desktop and Nav Mobile)*/}
                <div id='right-nav'>
                    {/* Nav Desktop */}
                    <nav id='nav-desktop'>
                        <ul>
                            <li><a href="">{t('home')}</a></li>
                            <li><a href="">{t('about')}</a></li>
                            <li><a href="">{t('pilots')}</a></li>
                            <li><a href="">{t('ecotracer')}</a></li>
                            <li id='content-lng'>
                                <button>{t('language')}</button>
                                <ul>
                                    <button onClick={() => changeLanguage('en')}>{t('english')}</button>
                                    <button onClick={() => changeLanguage('pt')}>{t('portuguese')}</button>
                                    <button onClick={() => changeLanguage('es')}>{t('spanish')}</button>
                                </ul>                            
                            </li>
                        </ul>
                    </nav>

                    {/* Menu Mobile */}
                    <div><img src="" alt="" /></div>

                    {/* Nav Mobile */}
                    <nav id='nav-mobile'>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Pilots</a></li>
                            <li><a href="">Ecotracer</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </NavStyle>
        </>
    )
}

export default Nav