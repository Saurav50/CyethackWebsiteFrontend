import React from 'react'
import HeroSection from './HeroSection'
import ClientMarquee from './ClientMarquee'
import OurMission from './OurMission'
import OurValues from './OurValues'
function AboutUs() {
  return (
    <div className='p-10 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/BackgroundFeatures.svg")]'>
      <HeroSection></HeroSection>
      <ClientMarquee></ClientMarquee>
      <OurMission></OurMission>
      <OurValues></OurValues>
    </div>
  )
}

export default AboutUs
