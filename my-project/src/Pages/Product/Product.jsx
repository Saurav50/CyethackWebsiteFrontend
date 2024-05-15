import React from 'react'
import HeroSection from './HeroSection'
import image from "../../assets/BackgroundFeatures.svg"
import CyeNetSuite from './CyeNetSuite'
import SecuritySuit from './SecuritySuit'
import GetStartedForm from './GetStartedForm'
function Product() {
  return (
    
    <div className='p-20 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/BackgroundFeatures.svg")]'>
     <HeroSection></HeroSection>
     <CyeNetSuite></CyeNetSuite>
     <SecuritySuit></SecuritySuit>
     <GetStartedForm></GetStartedForm>
    </div>
  )
}

export default Product
