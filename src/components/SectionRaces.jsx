import React, { useEffect, useState } from 'react';
import { SectionRacesStyle } from '../styles/SectionRacesStyle'
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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

                <Swiper id='container-races'
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }
                    }
                    pagination={{el: '', clickable: true}}
                    navigation={{
                        nextEl: '',
                        prevEl: '',
                        clickable: ''
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                >
                    {races.map((race) => (
                        <SwiperSlide className='card-race' key={race.id}>
                            <img src={race.country} alt={`Bandeira de ${race.city}`} width="100" />
                            <h2>Circuito: {race.name}</h2>
                            <p>Data: {race.data}</p>
                            <h3>{race.city}</h3>
                            <img src={race.race_track} alt={`Circuito ${race.name}`} width="100" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </SectionRacesStyle>
        </>
    );
};

export default SectionRaces;
