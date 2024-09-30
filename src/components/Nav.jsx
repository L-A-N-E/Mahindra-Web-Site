// Importando Dependencias
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Importando Styles
import { NavStyle, NavLogo, NavDesktop, NavItemsDesktop, NavItemsEffect, NavDesktopLanguages, NavHamburgerMenu,NavMenu, NavMobile, NavItemsMobile, NavMobileUl, NavMobileLanguages} from '../styles/NavStyle'

// Importando Imagens
import Arrow from '../assets/footer/arrow.svg'
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

const Nav = () => {

    // Opções de Idioma Desktop
    const [showOptionsLanguage, setShowOptionsLanguageDesktop] = useState(false)
    
    // Opções de Idioma para Mobile
    const [showOptionsLanguageMobile, setShowOptionsLanguageMobile] = useState(false);

    // Menu Mobile
    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    // Função para mudar de idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Mostra as Opções de idioma no Mobile
    useEffect(() => {
        if(showOptionsLanguageMobile){
            setShowOptionsLanguageMobile(true)
        }else{
            setShowOptionsLanguageMobile(false)
        }
    },[showOptionsLanguageMobile])

    
    return (
        <>
        <NavStyle>

            {/* Logo */}
            <Link to='/'>
                <NavLogo>
                    <img src={Logo} alt="" />
                </NavLogo>
            </Link>

            {/* Desktop */}
            <NavDesktop>
                <NavItemsDesktop>
                    <ul>
                        {/* Home */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none aling-txt' to = '/'><li>Home</li></Link>
                            </NavItemsEffect>
                        </li>
                
                        {/* Corridas */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none aling-txt' to= '/races'><li>{t('races')}</li></Link>
                            </NavItemsEffect>
                        </li>

                        {/* Mobile App */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to='/app-mobile'><li>{t('mobile-app')}</li></Link>
                            </NavItemsEffect>
                        </li>

                        {/* TrackVision */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none aling-txt ' to='/trackvision'><li>{t('trackvision')}</li></Link>
                            </NavItemsEffect>
                        </li>

                        {/* Idioma */}
                        <NavDesktopLanguages>

                            <NavItemsEffect className='language' onMouseEnter={()=> setShowOptionsLanguageDesktop(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>{t('language')}</li>
                            </NavItemsEffect>

                            {showOptionsLanguage &&(
                                <ul className='language-options' onMouseLeave={()=> setShowOptionsLanguageDesktop(false)}>
                                    <button onClick={()=> {setShowOptionsLanguageDesktop(false); changeLanguage('en')}}>English</button>
                                    <button onClick={()=> {setShowOptionsLanguageDesktop(false); changeLanguage('pt')}}>Portuguese</button>
                                    <button onClick={()=> {setShowOptionsLanguageDesktop(false); changeLanguage('es')}}>Spanish</button>
                                </ul>
                            )}
                        </NavDesktopLanguages>
                    </ul>
                </NavItemsDesktop>


            </NavDesktop>

            {/* Menu Hamburguer */}
            <NavHamburgerMenu>
                <NavMenu onClick={handleToggle} className={showMenu ? 'open' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavMenu>
            </NavHamburgerMenu>

            {/* Mobile */}
            {showMenu && (<NavMobile>
                <NavItemsMobile>
                    <NavMobileUl>
                        <Link className='txt-none' to='/'><li>Home</li></Link>
                
                        <Link className='txt-none' to= '/races'><li>{t('races')}</li></Link>
                        
                        <Link className='txt-none' to= '/app-mobile'><li>{t('app-mobile')}</li></Link>

                        <Link className='txt-none aling-txt ' to='/trackvision'><li>{t('trackvision')}</li></Link>

                        <NavMobileLanguages>
                            <ul className='language' onClick={()=> setShowOptionsLanguageMobile(!showOptionsLanguageMobile)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>{t('language')}</li>
                            </ul>
                        
                            {showOptionsLanguageMobile &&(
                                <ul className='language-options'>
                                    <button onClick={()=>{changeLanguage('en')}}>English</button>
                                    <button onClick={()=>{changeLanguage('pt')}}>Portuguese</button>
                                    <button onClick={()=>{changeLanguage('es')}}>Spanish</button>
                                </ul>
                            )}
                        </NavMobileLanguages>
                    </NavMobileUl>
                </NavItemsMobile>
            </NavMobile>)}

        </NavStyle>
        </>
    );
};

export default Nav;
