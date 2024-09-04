import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionPilotsStyle } from '../styles/SectionPilotsStyle';
import { Link } from 'react-router-dom';

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
            <section>
                {/* Pilot 1 */}
                <div className='pilot-1 background-pilots'>
                    <Link className='btn-pilots color-1 txt-none'><button className='txt-btn-pilots color-1'>Edoardo Mortara</button></Link>
                </div>

                {/* Pilot 2 */}
                <div className='pilot-2 background-pilots'>
                    <Link className='btn-pilots color-2 txt-none'><button className='txt-btn-pilots color-2'>Nicky De Vries</button></Link>
                </div>
            </section>
        </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
