import React, { useEffect, useState } from 'react';

const Races = () => {
    const [races, setRaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/races')
        .then((response) => response.json())
        .then((data) => setRaces(data))
    }, []);

    return (
        <div>
        <h1>Corridas</h1>
        <ul>
            {races.map((race) => (
            <div className='card-race' key={race.id}>
                <h2>{race.city}</h2>
                <p>Data: {race.data}</p>
                <p>Circuito: {race.name}</p>
                <img src={race.country} alt={`Bandeira de ${race.city}`} width="100" />
                <img src={race.race_track} alt={`Circuito ${race.name}`} width="100" />
            </div>
            ))}
        </ul>
        </div>
    );
};

export default Races;
