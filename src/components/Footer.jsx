import React from 'react'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';
import { Link } from 'react-router-dom';
import { FooterStyle, FooterContent, FooterColumnInfo, FooterInfo, FooterColumn, FooterContainerItems, FooterItems } from '../styles/FooterStyle';
import arrowFooter from '../assets/footer/arrow.svg'
import { useTranslation } from 'react-i18next'
import Medias from './Medias';

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
            <FooterContent>
              
              {/* Logo */}
              <FooterColumnInfo>  

                {/* Info */}
                <FooterInfo>
                    <img src={logoMahindra} alt='' />
                    <h5>{t('rights')}</h5>
                    <h5>LANE</h5>
                    <div>
                      <Medias>
                      </Medias>
                    </div>
                </FooterInfo>

              </FooterColumnInfo>

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

                  {/* News */}
                  <Link to='https://www.mahindraracing.com/news' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('news')}</h4>
                    </FooterItems>
                  </Link>


                  {/* Mahindra */}
                  <Link to='https://www.mahindraracing.com/' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mahindra')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Partners */}
                  <Link to='https://www.mahindraracing.com/partners' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('partners')}</h4>
                    </FooterItems>
                  </Link>

                </FooterContainerItems>

              </FooterColumn>

              {/* Column 2 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Carreiras */}
                  <Link to='https://www.mahindraracing.com/careers' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('carreiras')}</h4>
                    </FooterItems>
                  </Link>

                  {/* DRIVERS */}
                  <Link to='https://www.mahindraracing.com/drivers' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('driver')}</h4>
                    </FooterItems>
                  </Link>           


                  {/* Calendar */}
                  <Link to='https://www.mahindraracing.com/calendar' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('calendar')}</h4>
                    </FooterItems>
                  </Link>

                  {/* FIA */}
                  <Link to='https://www.fia.com/' className='txt-none'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>FIA</h4>
                    </FooterItems>
                  </Link>
                </FooterContainerItems>

              </FooterColumn>

            </FooterContent>
    </FooterStyle>
    </>
  )
}

export default Footer