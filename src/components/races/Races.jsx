// Importando Dependencias
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Importando Styles
import { RaceStyle, RaceContainer, RaceTop, RaceInfo, RaceFlag, RaceNameData, RaceBottom, RaceMainText, RaceSeeMore, RaceButton} from '../../styles/RacesStyle'

// Importando Imagens
import Arrow from '../../assets/footer/arrow.svg'


const SectionRaces = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    const [races, setRaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/races')
        .then((response) => response.json())
        .then((data) => setRaces(data))
    }, []);

    return (
        <>
        <RaceStyle>
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
                            <RaceContainer>
                                {/* Div Top */}
                                <RaceTop>
                                    {/* Info */}
                                    <RaceInfo>
                                        {/* Flag */}
                                        <RaceFlag>
                                            <img className='flag' src={race.country} alt={`${race.city} Flag`} />
                                        </RaceFlag>
                                        {/* Name & Data */}
                                        <RaceNameData>
                                            <h3 className='data'>{race.data}</h3>
                                            <h3 className='name'>{t(race.slug)}</h3>
                                        </RaceNameData>
                                    </RaceInfo>
                                </RaceTop>

                                {/* Div Bottom */}
                                <RaceBottom>
                                    {/* Title */}
                                    <RaceMainText>
                                        <img src={race.txt} alt={`${race.city} Flag`} />
                                    </RaceMainText>
                                    {/* Link */}
                                    <Link to={`/race-track/${race.slug}`} className='txt-none'>
                                        <RaceSeeMore>
                                            <img className='arrow-rotation' src={Arrow} alt="" />
                                            <RaceButton>View</RaceButton>
                                        </RaceSeeMore>
                                    </Link>
                                </RaceBottom>
                            </RaceContainer>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </RaceStyle>
        </>
    );
};

export default SectionRaces;
