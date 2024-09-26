import React from 'react'
import { useTranslation } from 'react-i18next';
import { SectionEcotracerStyle, EcotracerContent, EcotracerTitle, EcotracerParagraph} from '../../styles/SectionEcotracerStyle'

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

                {/* Conteudo */}
                <EcotracerContent>
                    {/* Title */}
                    <EcotracerTitle>
                        <h1>{t('title-ecotracer')} <strong>Ecotracer</strong></h1>
                    </EcotracerTitle>
                    {/* Paragraph */}
                    <EcotracerParagraph>
                        <p>{t('text-ecotracer')}</p>
                    </EcotracerParagraph>
                </EcotracerContent>

        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
