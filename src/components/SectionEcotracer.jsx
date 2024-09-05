import React from 'react'
import { useTranslation } from 'react-i18next';
import { SectionEcotracerStyle } from '../styles/SectionEcotracerStyle'

const SectionEcotracer = () => {

    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    return (
        <>
        <SectionEcotracerStyle>
            <section id='ecotracer'>
                {/* Left Image */}
                <div id='left-eco'></div>

                {/* Right Text */}
                <div id='right-eco'>
                    {/* Title */}
                    <div className='title-eco'>
                        <h1>{t('title-ecotracer')}</h1>
                        <h2>Ecotracer?</h2>
                    </div>

                    {/* Paragraph */}
                    <div className='p-eco'>
                        <p>{t('text-ecotracer')}</p>
                    </div>
                </div>
            </section>
        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
