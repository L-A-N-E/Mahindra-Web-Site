import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavStyle, NavLogo, NavDesktop, NavItemsDesktop, NavItemsEffect, NavDesktopLanguages, NavHamburgerMenu,NavMenu, NavMobile, NavItemsMobile, NavMobileUl, NavMobileLanguages} from '../styles/NavStyle'
import Arrow from '../assets/footer/arrow.svg'
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

const Nav = () => {

    // Language Options Desktop
    const [showOptionsLanguage, setShowOptionsLanguageDesktop] = useState(false)
    
    
    // Language Options Mobile
    const [showOptionsLanguageMobile, setShowOptionsLanguageMobile] = useState(false);

    // Menu Mobile
    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    // Change Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Show Language Options Mobile
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
            <NavLogo>
                <img src={Logo} alt="" />
            </NavLogo>

            {/* Desktop */}
            <NavDesktop>
                <NavItemsDesktop>
                    <ul>
                        {/* Home */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to = '/'><li>Home</li></Link>
                            </NavItemsEffect>
                        </li>
                
                        {/* Corridas */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to= '/races'><li>{t('races')}</li></Link>
                            </NavItemsEffect>
                        </li>

                        {/* Mobile App */}
                        <li>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to='/app-mobile'><li>{t('mobile-app')}</li></Link>
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
                <NavMenu onClick={handleToggle} showMenu={showMenu}>
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
