// Importando Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer';

// Importando Styles
import { ButtonRedFullStyle } from '../../styles/ButtonRedFullStyle'
import { SectionAboutStyle, AboutContainer, AboutContent } from '../../styles/SectionAboutStyle'


const SectionAbout = () => {

    // React intersection observer para animacao
    const {ref:textAbout, inView:textAboutVisible} = useInView({
      triggerOnce:true,
      threshold:0.3
    });

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };


  return (
    <>
    <SectionAboutStyle>
          {/* Container */}
          <AboutContainer>
            {/* Conteúdo */}
            <AboutContent ref={textAbout}>
              <h1 className={textAboutVisible ? 'text-animate' : ''}>{t('about')}</h1>
              <p className={textAboutVisible ? 'text-animate' : ''}>{t('text-about')}</p>
              <Link to='https://www.mahindra.com/about-us' target='blank' className={textAboutVisible ? 'text-animate' : ''}>
                <ButtonRedFullStyle className={textAboutVisible ? 'text-animate' : ''}>{t('more')}</ButtonRedFullStyle>
              </Link>
            </AboutContent>
          </AboutContainer>
      </SectionAboutStyle>
    </>
  )
}

export default SectionAbout
