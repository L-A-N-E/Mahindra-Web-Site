import React from 'react'
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


  return (
    <>
      <SectionHomeStyle>
          <Swiper 
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Pagination, Navigation]}
          effect={'fade'}
          >
            {/* Banner 1 */}
            <SwiperSlide className=' b1'> 
              <TextLoader/>
            </SwiperSlide>

            {/* Banner 2 */}
            <SwiperSlide className=' b2'>
            </SwiperSlide>

            {/* Banner 3 */}
            <SwiperSlide className=' b3'>
            
            </SwiperSlide>

            {/* Banner 4 */}
            <SwiperSlide className=' b4'>
            
            </SwiperSlide>
          </Swiper>
      </SectionHomeStyle>
    </>
  )
}

export default SectionHome