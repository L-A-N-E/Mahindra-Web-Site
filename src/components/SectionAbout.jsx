import React from 'react'
import { SectionAboutStyle } from '../styles/SectionAboutStyle'
import { useTranslation } from 'react-i18next'
import { use } from 'i18next';

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
        <section>
          {/* Container */}
          <div id='about-container'>
            {/* Content */}
            <div id='about-content'>
              <h1>About</h1>
              <p>{t('text-about')}</p>
              <a href="https://www.mahindraracing.com/" target="_blank"><button>Read More</button></a>    
            </div>
          </div>
        </section>
      </SectionAboutStyle>
    </>
  )
}

export default SectionAbout
