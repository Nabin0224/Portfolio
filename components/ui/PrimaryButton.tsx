'use client'
import playAudio from '@/app/lib/playAudio'
import React from 'react'

interface ButtonProps {
  btnText: String
}
const PrimaryButton = ({btnText}: ButtonProps ) => {
  return (
    <button
    className="rounded-2xl outline-gray-700 outline-1 hover:ring-[3px] hover:text-neon hover:text-primary hover:ring-[var(--color-primary)] hover:shadow-[0_0_15px_4px_var(--color-primary)] px-4 py-2 m-1 text-sm transition-all duration-300"
  onMouseEnter={playAudio}
  >
    <span className=''>{btnText}</span>
  </button>
  )
}

export default PrimaryButton