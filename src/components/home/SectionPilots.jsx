import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionPilotsStyle, Pilots} from '../../styles/SectionPilotsStyle';
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
                <Link to = '/edoardo-mortara'   className='pilot-1'>
                    <Pilots>
                    </Pilots>
                </Link>

                {/* Pilot 2 */}
                <Link to = '/nyck-de-vries' className='pilot-2'>
                    <Pilots>
                    </Pilots>
                </Link>
        </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
