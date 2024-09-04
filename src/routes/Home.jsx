import React from 'react';
import SectionHome from '../components/SectionHome';
import SectionAbout from '../components/SectionAbout';
import SectionPilots from '../components/SectionPilots';
import SectionEcotracer from '../components/SectionEcotracer';


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