import React from 'react'
import Cyethack from "../../assets/Cyethack.svg"
import NavBar from '../../Components/NavBar'
function HeroSection() {
  return (
    <div >
    <img className='mx-auto' src={Cyethack}></img>
      <div className='text-[#5A624C] flex flex-col justify-center mx-auto mt-[5%] bg-[#F1E9DD] w-[1200px] h-[500px]'>
        <p className='text-center'>this will be the space for product demo</p>
        <h1 className='text-4xl text-center'>Product Demo</h1>
      </div>
      <NavBar></NavBar>
    </div>
  )
}

export default HeroSection
