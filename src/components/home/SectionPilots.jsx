import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionPilotsStyle, PilotsBackground, ButtonPilots } from '../../styles/SectionPilotsStyle';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/footer/arrow.svg'

const SectionPilots = () => {

    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    return (
        <>
        <SectionPilotsStyle>
                {/* Pilot 1 */}
                <PilotsBackground className='pilot-1'>
                        <ButtonPilots className='color-1'>Edoardo Mortara</ButtonPilots>
                </PilotsBackground>

                {/* Pilot 2 */}
                <PilotsBackground className='pilot-2'>
                        <ButtonPilots className='color-2'>Nicky de Vries</ButtonPilots>
                </PilotsBackground>
        </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
