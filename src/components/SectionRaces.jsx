import React, { useEffect, useState } from 'react';
import { SectionRacesStyle } from '../styles/SectionRacesStyle'

const SectionRaces = () => {
    const [races, setRaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/races')
        .then((response) => response.json())
        .then((data) => setRaces(data))
    }, []);

    return (
        <>
        <SectionRacesStyle>
            <section>
                {/* Title */}
                <div id='title-race'>   
                    <h1>Circuitos</h1>
                </div>

                <div id='container-races'>
                    {races.map((race) => (
                        <div className='card-race' key={race.id}>
                            <img src={race.country} alt={`Bandeira de ${race.city}`} width="100" />
                            <h2>Circuito: {race.name}</h2>
                            <p>Data: {race.data}</p>
                            <h3>{race.city}</h3>
                            <img src={race.race_track} alt={`Circuito ${race.name}`} width="100" />
                        </div>
                    ))}
                </div>
            </section>
        </SectionRacesStyle>
        </>
    );
};

export default SectionRaces;
