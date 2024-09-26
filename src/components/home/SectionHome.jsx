import React, {useRef } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css'
import { SectionHomeStyle, BannerImage, BannerContent } from '../../styles/SectionHomeStyle'
import TextLoader from '../TextLoader'
import { ButtonRedStyle } from '../../styles/ButtonRedStyle'

import TRacer from '../../assets/home/banners/tracer.png'
import TrackVision from '../../assets/home/banners/trackvision.png'

const SectionHome = () => {

  // Select Language
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setShowLanguages(false);
  };


  // Cursor Grabbing
  const swiperRef = useRef(null);

  const handleTouchStart = () => {
    if (swiperRef.current) {
      swiperRef.current.classList.add('grabbing');
    }
  };

  const handleTouchEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.classList.remove('grabbing');
    }
  };


  return (
    <>
      <SectionHomeStyle>
      <Swiper
        ref={swiperRef}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]} // Adicionando o módulo Autoplay
        effect={'fade'}
        autoplay={{
          delay: 10000, // Tempo em milissegundos entre as trocas de slide
          disableOnInteraction: false, // Não pausar o autoplay quando o usuário interagir
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Banner 1 */}
        <SwiperSlide className='b1'>
          <TextLoader />
        </SwiperSlide>

        {/* Banner 2 */}
        <SwiperSlide className='b2'>
          <BannerImage>
            <img src={TRacer} alt="TRacer APP" />
          </BannerImage>
          <BannerContent>
            <h1>Garanta acesso antecipado ao nosso App</h1>
            <Link to='/login'>
              <ButtonRedStyle>Agora</ButtonRedStyle>
            </Link>
          </BannerContent>
        </SwiperSlide>

        {/* Banner 3 */}
        <SwiperSlide className='b3'>
          <BannerContent>
            <h1>Descubra o TrackVision</h1>
            <Link to='/trackvision'>
              <ButtonRedStyle>Descobrir</ButtonRedStyle>
            </Link>
          </BannerContent>
          <BannerImage>
            <img src={TrackVision} alt="TrackVision IOT" />
          </BannerImage>
        </SwiperSlide>
      </Swiper>
    </SectionHomeStyle>
    </>
  )
}

export default SectionHome