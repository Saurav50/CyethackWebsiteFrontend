import React from 'react'
import TenYears from "../../assets/TenYears.svg"

function Features() {

    let obj={
        TenYears:{
          name:"Ten Years",
          description:"In Business"
        },
        SeventyFiveThousand:{
          name:"75,000+",
          description:"Customers"
        },
        HundreadThousand:{
          name:"100k+",
          description:"Monthly Blog Readers"
        },
        OnePointTwo:{
          name:"1.2m+",
          description:"Social Followers"
        }
      }

  return (
    <div className='py-20 bg-cover bg-center  bg-no-repeat bg-[url("../src/assets/BackgroundFeatures.svg")] '>
        <div className='w-[100%]  flex flex-col justify-center'>
   <img className='mx-auto w-[60%] ' src={TenYears}></img>
   <p className='mt-[5%] w-[30%] mx-auto text-center text-[#C7C7C7] text-4xl'>Businesses all over the world feel 
 secured with Cyethack.</p>
   <div className='mt-[5%] flex justify-around w-[60%] mx-auto'>
        {/* Iterate over the object and print the name and description */}
        {Object.entries(obj).map(([key, value]) => (
          <div key={key} className="mt-5">
            <p className="text-center text-[#43E785] font-bold text-3xl">{value.name}</p>
            <p className="text-center text-[#C7C7C7] text-lg">{value.description}</p>
          </div>
        ))}
      </div>
      <hr className='w-[60%] mt-[5%] mx-auto text-[#DCDCDC]'></hr>
      <p className='text-center mt-[5%] text-xl text-[#C7C7C7]'>Join 1,60,000+ businesses like yours</p>
    
    <div className='flex justify-center mt-[1%]'>
    <button className='mx-auto bg-[black] rounded-full p-5 text-[#FFFFFF]'>Select a Plan</button>
    </div>
    </div>
    </div>
  )
}

export default Features
