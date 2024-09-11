import React from 'react'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';
import { Link } from 'react-router-dom';
import { FooterStyle, FooterLeft, FooterRight, FooterPosition, FooterInfo, FooterColumn, FooterContainerItems, FooterItems } from '../styles/FooterStyle';
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

            {/* Left Footer */}
            <FooterLeft>
              
              {/* Logo */}
              <FooterPosition>  

                {/* Info */}
                <FooterInfo>
                    <img src={logoMahindra} alt='' />
                    <h5>{t('rights')}</h5>
                    <h5>LANE</h5>
                </FooterInfo>

              </FooterPosition>

              {/* Column 1 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Races */}
                  <Link to='/races' className='txt-none' onClick={() => window.location.href = '/races'}>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('races')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Car */}
                  <Link to='/car' className='txt-none' onClick={() => window.location.href = '/car'}>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('car')}</h4>
                    </FooterItems>
                  </Link>


                  {/* Mahindra */}
                  <Link to='/' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mahindra')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Formula E */}
                  <Link to='/' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('formula-e')}</h4>
                    </FooterItems>
                  </Link>

                  {/* FIA */}
                  <Link to='/' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('fia')}</h4>
                    </FooterItems>
                  </Link>

                </FooterContainerItems>

              </FooterColumn>

              {/* Column 2 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* App Mobile */}
                  <Link to='/mobile-app' className='txt-none' onClick={() => window.location.href = '/app-mobile'}>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mobile-app')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Sign Up */}
                  <Link to='/sign-up' className='txt-none' onClick={() => window.location.href = '/sign-up'}>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('signup')}</h4>
                    </FooterItems>
                  </Link>           

                  {/* Login */}
                  <Link to='/login' className='txt-none' onClick={() => window.location.href = '/login'}>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('login')}</h4>
                    </FooterItems>
                  </Link>

                </FooterContainerItems>

              </FooterColumn>

            </FooterLeft>

            {/* Right Footer */}
            <FooterRight/>

    </FooterStyle>
    </>
  )
}

export default Footer