import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionPilotsStyle, PilotsCard} from '../../styles/SectionPilotsStyle';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/footer/arrow.svg'

const SectionPilots = () => {

    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    // Select Pilot
    const [pilots, setPilots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/pilots')
        .then((response) => response.json())
        .then((data) => setPilots(data))
    }, []);


    return (
        <>
            <SectionPilotsStyle>
                    {/* Pilot 1 */}
                    <Link to='pilots/edoardo-mortara' className='pilot-1'>
                        <PilotsCard>
                        </PilotsCard>
                    </Link>

                    {/* Pilot 2 */}
                    <Link to='pilots/nyck-de-vries' className='pilot-2'>
                        <PilotsCard>
                        </PilotsCard>
                    </Link>
            </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
