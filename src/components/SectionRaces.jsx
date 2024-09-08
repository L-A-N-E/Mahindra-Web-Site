import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionRacesStyle } from '../styles/SectionRacesStyle'
import Arrow from '../assets/footer/arrow.svg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SectionRaces = () => {
    const [races, setRaces] = useState([]);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };
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
                    {/* Slides */}
                    {races.map((race) => (
                        <SwiperSlide key={race.id}>
                            {/* Main */}
                            <div className='main-card'>
                                {/* Position Top */}
                                <div className='top-card'>
                                    {/* Info */}
                                    <div className='info-card'>
                                        {/* Flag */}
                                        <div className='flag-card'>
                                            <img className='flag' src={race.country} alt={`${race.city} Flag`} />
                                        </div>
                                        {/* Name & Data */}
                                        <div className='name-data'>
                                            <h3 className='data'>{race.data}</h3>
                                            <h3 className='name'>{race.name}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Position End */}
                                <div className='end-card'>
                                    {/* Title */}
                                    <div className='city'>
                                        <img src={race.txt} alt={`${race.city} Flag`} />
                                    </div>
                                    {/* Link */}
                                    <Link to={`/race-track/${race.slug}`} className='txt-none'>
                                        <div className='btn-card'>
                                            <img className='arrow-rotation' src={Arrow} alt="" />
                                            <button>View</button>
                                        </div>
                                    </Link>
                                </div>
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
