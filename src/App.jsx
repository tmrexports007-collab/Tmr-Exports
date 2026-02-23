import React from 'react'
import Nav from './components/Nav'
import About from "./components/About"
import WhyChooseUs from "./components/WhyChooseUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Products from './components/Products'
import OurMission from './components/OurMission'
import Quality from './components/Quality'
import Home from "./components/Home"
const App = () => {
  return (
    <div className='font-serif bg-white'>
      <Nav/>
      <Home/>
      <About/>
       <OurMission/>
      <Products/>
      <Quality/>
      <WhyChooseUs/>
       
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App