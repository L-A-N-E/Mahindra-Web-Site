import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css"
import { SectionHomeStyle } from '../styles/SectionHomeStyle'


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
        <section>
          <Swiper navigation={true} modules={[Navigation]} className="banner-welcome">
            {/* Banner 1 */}
            <SwiperSlide className="banner b2"> 
            </SwiperSlide>

            {/* Banner 2 */}
            <SwiperSlide className="banner b1">
              <div div className="txt-center-home">
                <h1 id='txt-rise'>{t('rise')}</h1>
                <h1 id='txt-race'>{t('and race')}</h1>
              </div>
            </SwiperSlide>

            {/* Banner 3 */}
            <SwiperSlide className="banner b3">
            
            </SwiperSlide>

            {/* Banner 4 */}
            <SwiperSlide className="banner b4">
            
            </SwiperSlide>
          </Swiper>
        </section>
      </SectionHomeStyle>
    </>
  )
}

export default SectionHome