import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Service /> 
      </div>
      </div>
  )
}

export default App