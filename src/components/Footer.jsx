import React from 'react'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';
import { Link } from 'react-router-dom';
import { FooterStyle } from '../styles/FooterStyle';
import arrowFooter from '../assets/footer/arrow.svg'

const Footer = () => {
  return (
    <>
    <FooterStyle>
        <footer>
            {/* Left Footer */}
            <div id='footer-left'>
              {/* Logo */}
              <div className='position-logo'>
                {/* Container */}
                <div className='container-logo'>
                  <img src={logoMahindra} alt="" />
                  <h5>@-Todos-os-Direitos-Reservados</h5>
                  <h5>LANE</h5>
                </div>
              </div>

              {/* Content 1 */}
              <div className='position-item'>
                {/* Container */}
                <div className='footer-container'>
                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>Pilots</h4>
                  </div>

                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>Mahindra</h4>
                  </div>

                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>Formula e</h4>
                  </div>

                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>Mobile App</h4>
                  </div>

                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>Races</h4>
                  </div>
                </div>
              </div>

              {/* Content 2 */}
              <div className='position-item'>
                {/* Container */}
                <div className='footer-container'>
                  {/* Items */}
                  <div className='item-footer'>
                    <img className='arrow-rotation' src={arrowFooter} alt="" />
                    <h4>About</h4>
                  </div>

                  {/* Items */}
                  <Link to='/login' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt="" />
                      <h4>Login</h4>
                  </div>
                  </Link>

                  {/* Items */}
                  <Link to='/sign-up' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt="" />
                      <h4>Sign-Up</h4>
                    </div>
                  </Link>           
                </div>
              </div>
            </div>

            {/* Right Footer */}
            <div id='footer-right'>
            </div>
        </footer>
      </FooterStyle>
    </>
  )
}

export default Footer