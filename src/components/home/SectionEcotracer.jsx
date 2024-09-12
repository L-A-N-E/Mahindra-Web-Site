import React from 'react'
import { useTranslation } from 'react-i18next';
import { SectionEcotracerStyle, EcotracerLeft, EcotracerRight, EcotracerTitle} from '../../styles/SectionEcotracerStyle'

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
                {/* Left Image */}
                <EcotracerLeft></EcotracerLeft>

                {/* Right Text */}
                <EcotracerRight>
                    {/* Title */}
                    <EcotracerTitle>
                        <h1>{t('title-ecotracer')}</h1>
                        <h2>Ecotracer?</h2>
                    </EcotracerTitle>

                    {/* Paragraph */}
                    <div className='p-eco'>
                        <p>{t('text-ecotracer')}</p>
                    </div>
                </EcotracerRight>
        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
