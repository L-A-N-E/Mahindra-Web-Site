import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavStyle, NavLogo, NavDesktop, NavItemsDesktop, NavItemsEffect, NavDesktopLanguages, NavHamburgerMenu,NavMenu, NavMobile, NavItemsMobile, NavMobileLanguages} from '../styles/NavStyle'
import Arrow from '../assets/footer/arrow.svg'
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

const Nav = () => {

    // Language Options
    const [showOptionsLanguage, setShowOptionsLanguage] = useState(false)

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
                        <Link className='txt-none'>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to = '/'><li>home</li></Link>
                            </NavItemsEffect>
                        </Link>
                
                        {/* Corridas */}
                        <Link className='txt-none'>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to= '/races'><li>{t('races')}</li></Link>
                            </NavItemsEffect>
                        </Link>

                        {/* Mobile App */}
                        <Link className='txt-none'>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <Link className='txt-none' to='/mobile-app'><li>{t('mobile-app')}</li></Link>
                            </NavItemsEffect>
                        </Link>
                        
                        {/* Idioma */}
                        <NavDesktopLanguages>

                            <NavItemsEffect className='language' onMouseEnter={()=> setShowOptionsLanguage(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>{t('language')}</li>
                            </NavItemsEffect>

                            {showOptionsLanguage &&(
                                <ul className='language-options' onMouseLeave={()=> setShowOptionsLanguage(false)}>
                                    <button onClick={()=> {setShowOptionsLanguage(false); changeLanguage('en')}}>English</button>
                                    <button onClick={()=> {setShowOptionsLanguage(false); changeLanguage('pt')}}>Portuguese</button>
                                    <button onClick={()=> {setShowOptionsLanguage(false); changeLanguage('es')}}>Spanish</button>
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
                    <ul>
                        <Link className='txt-none' to='/'>
                            <li>Home</li>
                        </Link>
                
                        <Link className='txt-none' to='/races'>
                            <li>Races</li>
                        </Link>

                        <Link className='txt-none' to='/mobile-app'>
                            <li>App Mobile</li>
                        </Link>


                        <Link className='txt-none' to='/sign-up'>
                            <li>Sing-Up</li>
                        </Link>
                        
                        <Link className='txt-none' to=''>
                            <li>Login</li>
                        </Link>
                        
                        <NavMobileLanguages>
                            <ul className='language' onClick={()=> setShowOptionsLanguage(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>Language</li>
                            </ul>
                        {showOptionsLanguage &&(
                            <ul onClick={()=> setShowOptionsLanguage(false)}>
                                <button onClick={()=> setShowOptionsLanguage(false)}>English</button>
                                <button onClick={()=> setShowOptionsLanguage(false)}>Portuguese</button>
                                <button onClick={()=> setShowOptionsLanguage(false)}>Spanish</button>
                            </ul>
                        )}
                        </NavMobileLanguages>
                    </ul>
                </NavItemsMobile>

                <div>
                    <Link>
                        <li>Sing-Up</li>
                    </Link>
                    
                    <Link>
                        <li>Login</li>
                    </Link>
                </div>
            </NavMobile>)}

        </NavStyle>
        </>
    );
};

export default Nav;
