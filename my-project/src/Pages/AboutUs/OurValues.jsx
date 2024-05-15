import React from 'react'
import Innovation from "../../assets/AboutUsImages/Innovation.svg"
import Growth from "../../assets/AboutUsImages/Growth.svg"
import Ownership from "../../assets/AboutUsImages/Ownership.svg"
import TeamWork from "../../assets/AboutUsImages/TeamWork.svg"
import Commitment from "../../assets/AboutUsImages/Commitment.svg"
import Positivity from "../../assets/AboutUsImages/Positivity.svg"
import AboutUsBackground from "../../assets/AboutUsImages/AboutUsBackground.svg"
function OurValues() {
   let values={
        Innovation:{
            name:"Innovation",
            logo:Innovation,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        },
        Growth:{
            name:"Growth",
            logo:Growth,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        },
        Ownership:{
            name:"Ownership",
            logo:Ownership,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        },
        Team_Work:{
            name:"Team Work",
            logo:TeamWork,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        },
        Commitment:{
            name:"Commitment",
            logo:Commitment,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        },
        Positivity:{
            name:"Positivity",
            logo:Positivity,
            description:"Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built."
        }
    }
  return (
    <div className='w-[80%] mt-[10%] mx-auto'>
      <p className='text-3xl text-[#DBDBDB] text-center'>Our Values</p>
      <div className='text-[#DFDFDF] mt-[5%] grid gap-x-8 gap-y-10 grid-cols-3 grid-rows-2'>
      {Object.keys(values).map(key => (
        <div className='' key={key}>
        <img className='mx-auto' src={values[key].logo}></img>
        <p className='text-center text-xl mb-[5%]'>{values[key].name}</p>
        <p className='w-[80%] mx-auto text-center '>{values[key].description}</p>
        </div>
      ))}
     </div>

     <div className='py-20 '>
       <div className='rounded-md  mx-auto '>
      <div className='p-10 flex relative rounded-lg   bg-cover bg-center  bg-no-repeat bg-[url("../../src/assets/AboutUsImages/AboutUsBackground.svg")]'> 
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

      </div>
   
    </div>
    </div>
    </div>
  )
}

export default OurValues
