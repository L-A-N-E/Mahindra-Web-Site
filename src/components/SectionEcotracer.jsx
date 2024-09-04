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
                        <h1>Why</h1>
                        <h2>Ecotracer</h2>
                    </div>

                    {/* Paragraph */}
                    <div className='p-eco'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </section>
        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer
