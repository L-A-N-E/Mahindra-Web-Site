// Importando Dependencias
import React, {useRef } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css'

// Importando Styles
import { SectionHomeStyle, BannerImage, BannerContent } from '../../styles/SectionHomeStyle'
import { ButtonRedStyle } from '../../styles/ButtonRedStyle'

// Importando Imagens
import TRacer from '../../assets/home/banners/tracer.png'
import TrackVision from '../../assets/home/banners/trackvision.png'

// Importando Componentes
import TextLoader from '../TextLoader'

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
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 10000, 
          disableOnInteraction: false, 
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
            <h1>{t("acesso")}</h1>
            <Link to='/login'>
              <ButtonRedStyle>{t('now')}</ButtonRedStyle>
            </Link>
          </BannerContent>
        </SwiperSlide>

        {/* Banner 3 */}
        <SwiperSlide className='b3'>
          <BannerContent>
            <h1>{t("descubra")}</h1>
            <Link to='/trackvision'>
              <ButtonRedStyle>{t("descubra-btn")}</ButtonRedStyle>
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