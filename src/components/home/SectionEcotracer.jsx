// Importando Dependencias
import React from 'react'
import { useTranslation } from 'react-i18next';

// Importando Styles
import { SectionEcotracerStyle, EcotracerContent, EcotracerTitle, EcotracerParagraph} from '../../styles/SectionEcotracerStyle'

const SectionEcotracer = () => {

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    return (
        <>
        <SectionEcotracerStyle>

                {/* Conteúdo */}
                <EcotracerContent>
                    {/* Título */}
                    <EcotracerTitle>
                        <h1>{t('title-ecotracer')} <strong>Ecotracer?</strong></h1>
                    </EcotracerTitle>
                    {/* Parágrafo */}
                    <EcotracerParagraph>
                        <p>{t('text-ecotracer')}</p>
                    </EcotracerParagraph>
                </EcotracerContent>

        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
