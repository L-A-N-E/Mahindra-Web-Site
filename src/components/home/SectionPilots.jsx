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
                    <a href='https://www.mahindraracing.com/drivers/edoardo-mortara' className='btn-pilots txt-none' target='_blank'>
                        <ButtonPilots className='color-1'>
                            <img src={Arrow} alt="Arrow" />
                            Edoardo Mortara
                        </ButtonPilots>
                    </a>
                </PilotsBackground>

                {/* Pilot 2 */}
                <PilotsBackground className='pilot-2'>
                    <a href='https://www.mahindraracing.com/drivers/nyck-de-vries' className='btn-pilots txt-none' target='_blank'>
                        <ButtonPilots className='color-2'>
                            <img src={Arrow} alt="Arrow" />
                            Nicky de Vries
                        </ButtonPilots>
                    </a>
                </PilotsBackground>
        </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
