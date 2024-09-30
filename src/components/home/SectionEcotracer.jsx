// Importando Dependencias
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

// Importando Styles
import { SectionEcotracerStyle, EcotracerContent, EcotracerTitle, EcotracerParagraph} from '../../styles/SectionEcotracerStyle'

const SectionEcotracer = () => {

    // UseInView para animacoes
    const {ref:textEco, inView:textEcoVisible} = useInView({
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
        <SectionEcotracerStyle>

                {/* Conteúdo */}
                <EcotracerContent ref={textEco}>
                    {/* Título */}
                    <EcotracerTitle className={textEcoVisible ? 'text-animate' : ''}>
                        <h1>{t('title-ecotracer')} <strong>Ecotracer?</strong></h1>
                    </EcotracerTitle>
                    {/* Parágrafo */}
                    <EcotracerParagraph className={textEcoVisible ? 'text-animate' : ''}>
                        <p>{t('text-ecotracer')}</p>
                    </EcotracerParagraph>
                </EcotracerContent>

        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
