import React, { useEffect, useState } from 'react';
import { SectionRacesStyle } from '../styles/SectionRacesStyle'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={false}
                    slidesPerView={"auto"}
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
                        <SwiperSlide key={race.id}>
                            <div className="container-info">
                                <div className="img-flag">
                                    <img src={race.country} alt={`${race.city} Flag`} />
                                </div>
                                <h3>{race.city}</h3>
                                <h2>{race.name}</h2>
                                <p>{race.data}</p>
                            </div>
                            <div className="container-img">
                                <img src={race.race_track} alt={`Circuit ${race.name}`} className='img-circuit' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </SectionRacesStyle>
        </>
    );
};

export default SectionRaces;
