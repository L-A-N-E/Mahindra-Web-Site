import React from 'react';
import SectionHome from '../components/home/SectionHome';
import SectionAbout from '../components/home/SectionAbout';
import SectionPilots from '../components/home/SectionPilots';
import SectionEcotracer from '../components/home/SectionEcotracer';
import { HomeStyle } from '../styles/HomeStyle'

const Home = () => {
  return (
    <>
    <HomeStyle>
      {/* Section Home */}
      <SectionHome />
      {/* Section About */}
      <SectionAbout />
    </HomeStyle>
      {/* Section Pilots*/}
      <SectionPilots /> 
      {/* Section Ecotracer */}
      <SectionEcotracer />
    </>
  )
}

export default Home