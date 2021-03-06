import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Protfolio from './components/protfolio/Protfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services/>
      <Protfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App