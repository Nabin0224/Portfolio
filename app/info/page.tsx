import Navbar from '@/components/ui/front/Navbar'
import { div } from 'framer-motion/client'
import React from 'react'

const Info = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero h-[60vh] flex justify-between items-center w-[80%] mx-auto">
        <h2 className='text-7xl font-open-sans font-extrabold inline-block scale-y-145 text-neon text-white/60'>HELLO, I AM NABIN BUDHATHOKI, <br /> FULL STACK DEVELOPER.</h2>
      </div>
      <div className="skills flex md:flex-row flex-col">
        <div className="bar">

        </div>
        <div className="about">

        </div>
      </div>
    </div>
  )
}

export default Info