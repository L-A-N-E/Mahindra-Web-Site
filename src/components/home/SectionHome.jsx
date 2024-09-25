import React, {useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css'
import { SectionHomeStyle } from '../../styles/SectionHomeStyle'
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
        modules={[EffectFade, Pagination, Navigation]}
        effect={'fade'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onSliderFirstMove={handleTouchStart}
        onTouchMove={handleTouchStart}
      >
        {/* Banner 1 */}
        <SwiperSlide className='b1'>
          <TextLoader />
        </SwiperSlide>

        {/* Banner 2 */}
        <SwiperSlide className='b2'>
          {/* Conteúdo do Banner 2 */}
        </SwiperSlide>

        {/* Banner 3 */}
        <SwiperSlide className='b3'>
          {/* Conteúdo do Banner 3 */}
        </SwiperSlide>

        {/* Banner 4 */}
        <SwiperSlide className='b4'>
          {/* Conteúdo do Banner 4 */}
        </SwiperSlide>
      </Swiper>
    </SectionHomeStyle>
    </>
  )
}

export default SectionHome