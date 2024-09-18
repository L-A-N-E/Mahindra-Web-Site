import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavStyle, NavLogo, NavDesktop, NavItemsDesktop, NavItemsEffect, NavDesktopLanguages, HamburgerMenu,NavMenu, NavMobile, NavItemsMobile, NavMobileLanguages} from '../styles/NavStyle'
import Arrow from '../assets/footer/arrow.svg'
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

const Nav = () => {
    const [showOptionsLanguage, setShowOptionsLanguage] = useState(false)
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
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
                                <li>Home</li>
                            </NavItemsEffect>
                        </Link>
                
                        {/* Corridas */}
                        <Link className='txt-none'>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <li>Races</li>
                            </NavItemsEffect>
                        </Link>

                        {/* Mobile App */}
                        <Link className='txt-none'>
                            <NavItemsEffect>
                                <img src={Arrow} alt="Arrow" />
                                <li>Mobile App</li>
                            </NavItemsEffect>
                        </Link>
                        
                        {/* Idioma */}
                        <NavDesktopLanguages>

                            <NavItemsEffect className='language' onMouseEnter={()=> setShowOptionsLanguage(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>Language</li>
                            </NavItemsEffect>

                            {showOptionsLanguage &&(
                                <ul className='language-options' onMouseLeave={()=> setShowOptionsLanguage(false)}>
                                    <li onClick={()=> setShowOptionsLanguage(false)}>English</li>
                                    <li onClick={()=> setShowOptionsLanguage(false)}>Portuguese</li>
                                    <li onClick={()=> setShowOptionsLanguage(false)}>Spanish</li>
                                </ul>
                            )}
                        </NavDesktopLanguages>
                    </ul>
                </NavItemsDesktop>


            </NavDesktop>

            {/* Menu Hamburguer */}
            <HamburgerMenu>
                <NavMenu onClick={handleToggle} showMenu={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavMenu>
            </HamburgerMenu>

            {/* Mobile */}
            {showMenu && (<NavMobile>
                <NavItemsMobile>
                    <ul>
                        <Link className='txt-none'>
                            <li>Home</li>
                        </Link>
                
                        <Link className='txt-none'>
                            <li>Races</li>
                        </Link>

                        <Link className='txt-none'>
                            <li>App Mobile</li>
                        </Link>


                        <Link className='txt-none'>
                            <li>Sing-Up</li>
                        </Link>
                        
                        <Link className='txt-none'>
                            <li>Login</li>
                        </Link>
                        
                        <NavMobileLanguages>
                            <ul className='language' onClick={()=> setShowOptionsLanguage(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>Language</li>
                            </ul>
                        {showOptionsLanguage &&(
                            <ul onClick={()=> setShowOptionsLanguage(false)}>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>English</Link></li>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>Portuguese</Link></li>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>Spanish</Link></li>
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
