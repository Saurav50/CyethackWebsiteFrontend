import React from 'react'
import SevenDayTrialTop from "../../assets/SevenDayTop.svg"

function Trial() {
  return (
    <div>
       <div className='rounded-md w-[80%] mt-[20%] mx-auto '>
      <div className='p-10 flex relative rounded-lg h-[400px]  bg-cover bg-center  bg-no-repeat bg-[url("../src/assets/SevenDayTrial.svg")]'> 
      <div className='p-5 w-[70%] flex flex-col justify-around'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold drop-shadow-2xl text-[#FFFFFF] text-3xl'>Start your 7-day free trial</h1>
        <p className='text-[#FFFFFF] '>Felix can help bring your dream website to life with ease.</p>
        </div> 
        <div className='px-3 h-[50px]  flex justify-center  rounded-full w-[60%] bg-[#FFFFFF]'>
        <input className=' w-[100%] mx-auto rounded-full  bg-[#FFFFFF]' placeholder='Enter Your Email'></input>
        <button className='my-2  w-[30%] flex justify-center   bg-[black] rounded-full  text-center  text-[#FFFFFF]'>Start</button>
        </div> 
        <ul className='text-[#FFFFFF] flex gap-4'>
          <li>Free 7-day trial</li>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
        </ul>
      </div>
        <img className='absolute right-0 top-0' src={SevenDayTrialTop}></img>
      </div>
   
    </div>
    </div>
  )
}

export default Trial
