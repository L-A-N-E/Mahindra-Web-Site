import React from 'react'
import { NavStyle } from '../styles/NavStyle'

const Nav = () => {
  return (
    <>
    <NavStyle>
        <header>
            {/* Left (Logo Mahindra) */}
            <div>
                <img src="#" alt="Logo Mahindra" />
            </div>

            {/* Right (Nav Desktop and Nav Mobile)*/}
            <div>
                {/* Nav Desktop */}
                <nav id='nav-desktop'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Pilots</a></li>
                        <li><a href="">Ecotracer</a></li>
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