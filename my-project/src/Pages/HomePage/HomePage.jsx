import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import Tools from './Tools'
import ContactUs from './ContactUs'
import GetStarted from './GetStarted'
import Brands from './Brands'
import NewsArticles from './NewsArticles'
import Trial from './Trial'
import Footer from './Footer'

function HomePage() {
  return (
    <div className=''>
   <HeroSection></HeroSection>
   <Features></Features>
   <Tools></Tools>
   <ContactUs></ContactUs>
   <GetStarted></GetStarted>
   <Brands></Brands>
   <NewsArticles></NewsArticles>
   <Trial></Trial>
   <Footer></Footer>
    </div>
  )
}

export default HomePage
