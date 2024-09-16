import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavStyle, NavLogo, NavDesktop, NavItemsDesktop, NavDesktopLanguages, NavMenu, NavMobile, NavItemsMobile, NavMobileLanguages} from '../styles/NavStyle'
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
                        
                        <NavDesktopLanguages>
                            <ul className='language' onMouseEnter={()=> setShowOptionsLanguage(true)}>
                                <img src={Arrow} alt="Arrow" />
                                <li>Language</li>
                            </ul>
                        {showOptionsLanguage &&(
                            <ul className='language-options' onMouseLeave={()=> setShowOptionsLanguage(false)}>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>English</Link></li>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>Portuguese</Link></li>
                                <li onClick={()=> setShowOptionsLanguage(false)}><Link>Spanish</Link></li>
                            </ul>
                        )}
                        </NavDesktopLanguages>
                    </ul>
                </NavItemsDesktop>


            </NavDesktop>

            {/* Menu Hamburguer */}
            <NavMenu onClick={handleToggle} >
                <span></span>
                <span></span>
                <span></span>
            </NavMenu>

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
