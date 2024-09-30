// Importando Dependencias
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

// Importando Styles
import { SectionPilotsStyle, PilotsContainer, PilotsCard} from '../../styles/SectionPilotsStyle';

// Importando Imagens
import EdoardoMortara from '../../assets/home/pilots/pilot-1.png'
import NyckdeVries from '../../assets/home/pilots/pilot-2.png'

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
                <PilotsContainer>
                    {/* Pilot 1 */}
                    <PilotsCard>
                        <Link to='pilots/edoardo-mortara'>
                            <div>
                                <img src={EdoardoMortara} alt="Edoardo Mortara" />
                            </div>
                        </Link>
                    </PilotsCard>

                    {/* Pilot 2 */}
                    <PilotsCard>
                        <Link to='pilots/nyck-de-vries'>
                            <div>
                                <img src={NyckdeVries} alt="Nyck de Vries" />
                            </div>
                        </Link>
                    </PilotsCard>
                </PilotsContainer>
            </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots
