import React from 'react'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';
import { Link } from 'react-router-dom';
import { FooterStyle } from '../styles/FooterStyle';
import arrowFooter from '../assets/footer/arrow.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  // Select Language
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setShowLanguages(false);
    };
    
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
                  <img src={logoMahindra} alt='' />
                  <h5>{t('rights')}</h5>
                  <h5>LANE</h5>
                </div>
              </div>

              {/* Column 1 */}
              <div className='position-item'>

                {/* Items */}
                <div className='footer-container'>

                  {/* Races */}
                  <Link to='/' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('races')}</h4>
                    </div>
                  </Link>

                  {/* Car */}
                  <Link to='/' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('car')}</h4>
                    </div>
                  </Link>


                  {/* Items */}
                  <Link to='/' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mahindra')}</h4>
                    </div>
                  </Link>

                  {/* Formula E */}
                  <Link to='/' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('formula-e')}</h4>
                    </div>
                  </Link>

                  {/* FIA */}
                  <Link to='/' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('fia')}</h4>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 2 */}
              <div className='position-item'>

                {/* Items */}
                <div className='footer-container'>

                  {/* App Mobile */}
                  <Link to='/mobile-app' className='txt-none'>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mobile-app')}</h4>
                    </div>
                  </Link>

                  {/* Sign Up */}
                  <Link to='/sign-up' className='txt-none' onClick={() => window.location.href = '/sign-up'}>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('signup')}</h4>
                    </div>
                  </Link>           

                  {/* Login */}
                  <Link to='/login' className='txt-none' onClick={() => window.location.href = '/login'}>
                    <div className='item-footer'>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('login')}</h4>
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