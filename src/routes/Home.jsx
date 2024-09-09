import React from 'react';
import SectionHome from '../components/home/SectionHome';
import SectionAbout from '../components/home/SectionAbout';
import SectionPilots from '../components/home/SectionPilots';
import SectionEcotracer from '../components/home/SectionEcotracer';


const Home = () => {
  return (
    <>
      {/* Section Home */}
      <SectionHome />
      {/* Section About */}
      <SectionAbout />
      {/* Section Pilots*/}
      <SectionPilots />
      {/* Section Ecotracer */}
      <SectionEcotracer />
    </>
  )
}

export default Home