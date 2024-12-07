import React from 'react'
import About from '../pages/About'
import Footer from '../components/Footer'

const DynamicLayout = ({children}) => {
  return (
    <div className="font-Raleway">
        <About/>
        {children}
        <Footer/>
    </div>
  )
}

export default DynamicLayout