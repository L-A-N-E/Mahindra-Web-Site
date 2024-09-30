// Importando Dependencias
import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

// Importando Styles
import { FooterStyle, FooterContent, FooterColumnInfo, FooterInfo, FooterColumn, FooterContainerItems, FooterItems } from '../styles/FooterStyle';

// Importando Componentes
import Medias from './Medias';

// Importando Imagens
import arrowFooter from '../assets/footer/arrow.svg'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';

const Footer = () => {

  // Função para mudar idioma
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setShowLanguages(false);
    };
    
  return (
    <>
    <FooterStyle>

            {/* Footer - Esquerda */}
            <FooterContent>
              
              {/* Logo */}
              <FooterColumnInfo>  

                {/* Informações */}
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

              {/* Coluna 1 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Notícias */}
                  <Link to='https://www.mahindraracing.com/news' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('news')}</h4>
                    </FooterItems>
                  </Link>


                  {/* Mahindra */}
                  <Link to='https://www.mahindraracing.com/' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('mahindra')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Parcerias */}
                  <Link to='https://www.mahindraracing.com/partners' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('partners')}</h4>
                    </FooterItems>
                  </Link>

                </FooterContainerItems>

              </FooterColumn>

              {/* Coluna 2 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Carreiras */}
                  <Link to='https://www.mahindraracing.com/careers' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('carreiras')}</h4>
                    </FooterItems>
                  </Link>

                  {/* Corredores */}
                  <Link to='https://www.mahindraracing.com/drivers' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('driver')}</h4>
                    </FooterItems>
                  </Link>           


                  {/* Calendário */}
                  <Link to='https://www.mahindraracing.com/calendar' className='txt-none' target='blank'>
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>{t('calendar')}</h4>
                    </FooterItems>
                  </Link>

                  {/* FIA */}
                  <Link to='https://www.fia.com/' className='txt-none' target='blank'>
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