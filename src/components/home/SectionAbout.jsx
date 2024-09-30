// Importando Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Importando Styles
import { ButtonRedFullStyle } from '../../styles/ButtonRedFullStyle'
import { SectionAboutStyle, AboutContainer, AboutContent } from '../../styles/SectionAboutStyle'


const SectionAbout = () => {

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
            <AboutContent>
              <h1>{t('about')}</h1>
              <p>{t('text-about')}</p>
              <Link to='https://www.mahindra.com/about-us' target='blank'>
                <ButtonRedFullStyle>{t('more')}</ButtonRedFullStyle>
              </Link>
            </AboutContent>
          </AboutContainer>
      </SectionAboutStyle>
    </>
  )
}

export default SectionAbout
