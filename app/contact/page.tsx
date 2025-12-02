"use client"
import Footer from '@/components/ui/front/Footer'
import Navbar from '@/components/ui/front/Navbar'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Separator from '@/components/ui/Separator'
import React, { useState } from 'react'

const Contact = () => {
  const [showCopy, setShowCopy] = useState("Click to copy");
  const [isHover, setIsHover] = useState(false);

  const handleCopy = async ()=>  {
    try {
      await navigator.clipboard.writeText("nabinbudhathoki2004@gmail.com");
      
      setShowCopy("Copied")
    } catch (err) {
      setShowCopy('Failed to copy!');
      console.error('Failed to copy text: ', err);
    }
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen min-w-screen'>
    <Navbar />
     <div className='h-[35%] flex justify-center items-center'>
      <p className='text-muted text-neon text-center w-[60%]'>Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
     </div>
     <div className="relative gmail text-center h-[70%] ">
     <Separator/>
      <p className='text-2xl md:text-6xl text-neon m-20 cursor-pointer'
      onMouseEnter={()=> setIsHover(true)}
      onMouseLeave={()=> setIsHover(false)}
      onClick={()=> handleCopy()}
      >nabinbudhathoki2004@gmail.com</p>
      { isHover && <div className='absolute top-40 left-[700px]'><PrimaryButton btnText={showCopy}/></div>}
     <Separator />
     </div>
     <div className="social flex justify-center items-center">
     <div className="buttons-wrapper flex justify-center items-end h-full">
     <PrimaryButton btnText="Linkedn"/>
      <PrimaryButton btnText="Github"/>
      <PrimaryButton btnText="Facebook"/>
      <PrimaryButton btnText="Instagram"/>
     </div>
     </div>
    </div>
    </>
  )
}

export default Contact