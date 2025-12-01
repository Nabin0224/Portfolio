'use client'
import React, { useState } from 'react'
import  ResourceButton  from "./ShapeButton"
import { div } from 'framer-motion/client';

const HoverTooltip = ({text, children}) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});


    function handleMouseMove(e) {

        if(e.target.closest(".no-tooltip")) {
            setVisible(false);
             return;
        }

        setVisible(true)
    
        
        setPosition({
            x : e.clientX + 15,
            y : e.clientY + 15
        })
    }
  

  return (
    <>
    <div 
    className='cursor-pointer'
    onMouseEnter={()=> setVisible(true)}
    onMouseLeave={() => setVisible(false)}
    onMouseMove={handleMouseMove}
    >
     
    {children}

     <ResourceButton value={text}  className={`fixed transition-opacity duration-500 py-3 ${visible  ? 'opacity-100':  "opacity-0"}`} style={{
            top: position.y + "px",
            left: position.x + "px",
            position: "fixed",
            
            
          }}   />
     

     </div>
    </>
  )
}

export default HoverTooltip;