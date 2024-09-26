import React, {useRef } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css'
import { SectionHomeStyle, BannerLeft, BannerRight } from '../../styles/SectionHomeStyle'
import TextLoader from '../TextLoader'
import { ButtonRedStyle } from '../../styles/ButtonRedStyle'

import Celular from '../../assets/home/banners/img cell.png'

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
        // autoplay={{
        //   delay: 10000, // Tempo em milissegundos entre as trocas de slide
        //   disableOnInteraction: false, // Não pausar o autoplay quando o usuário interagir
        // }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Banner 1 */}
        <SwiperSlide className='b1'>
          <TextLoader />
        </SwiperSlide>

        {/* Banner 2 */}
        <SwiperSlide className='b2'>

          {/* Esquerda */}
          <BannerLeft>
            <img src={Celular} alt="" />
          </BannerLeft>

          {/* Direita */}
          <BannerRight>
            <h1>Garanta acesso antecipado</h1>
            <Link to='/login'>
              <ButtonRedStyle>Agora</ButtonRedStyle>
            </Link>
          </BannerRight>
        </SwiperSlide>

        {/* Banner 3 */}
        <SwiperSlide className='b3'>
          <BannerLeft>
            <img src={Celular} alt="" />
          </BannerLeft>
          <BannerRight>
            <h1>Garanta acesso antecipado</h1>
            <Link to='/login'>
              <ButtonRedStyle>Agora</ButtonRedStyle>
            </Link>
          </BannerRight>
        </SwiperSlide>
      </Swiper>
    </SectionHomeStyle>
    </>
  )
}

export default SectionHome