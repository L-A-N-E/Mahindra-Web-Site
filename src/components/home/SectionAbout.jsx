import React from 'react'
import { SectionAboutStyle, AboutContainer, AboutContent } from '../../styles/SectionAboutStyle'
import { ButtonRedFullStyle } from '../../styles/ButtonRedFullStyle'
import { useTranslation } from 'react-i18next'



const SectionAbout = () => {
   // Select Language
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
            {/* Content */}
            <AboutContent>
              <h1>{t('about')}</h1>
              <p>{t('text-about')}</p>
              <ButtonRedFullStyle>{t('more')}</ButtonRedFullStyle>
            </AboutContent>
          </AboutContainer>
      </SectionAboutStyle>
    </>
  )
}

export default SectionAbout
