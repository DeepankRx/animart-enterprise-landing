import React from 'react'
import NavBar from '@/components/Navbar/NavBar'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import AboutUs from '@/components/AboutUs'
import OurWork from '@/components/OurWork'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
const HomePage = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <OurWork />
        <Projects />
        <Footer />
    </div>
  )
}

export default HomePage