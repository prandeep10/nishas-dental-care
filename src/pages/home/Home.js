import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import Services from '../../components/services/Services'
import StatisticsSection from '../../components/statistics/StatisticsSection'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <Services/>
   <StatisticsSection/>
   <Testimonials/>
   </>
  )
}

export default Home