import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Nav from './components/Nav'
import OurMission from './components/OurMission'
import Quality from './components/Quality'


const App = () => {
  return (
    <>
    <Nav/>
    <section id='home'>
    <Home/>
    </section>
    <section id='product'>
    <Products/>
    </section>
    <section id='mission'>
    <OurMission/>
    </section>
    <section id='quality'>
    <Quality/>
    </section>
</>
  )
}

export default App