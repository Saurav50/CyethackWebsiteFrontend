import React from 'react'
import HeroImage from "../../assets/AboutUsImages/HeroSection.svg"
import telegram from "../../assets/AboutUsImages/Telegram.svg"
import Settings from "../../assets/AboutUsImages/Settings.svg"
import Cyethack from "../../assets/Cyethack.svg"
import Back from "../../assets/AboutUsImages/AboutUsBackground.svg"
import Navbar from "../../Components/NavBar"


function HeroSection() {
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

  let mission={
    first:{
      heading:"How technology started",
      description:"Building an enterprisedoesn't need  your thousands.",
      logo:telegram
    },
    second:{
      heading:"How technology started",
      description:"Building an enterprisedoesn't need  your thousands.",
      logo:Settings
    }

    
  }
  return (
    <div className=''>
    <img className='mx-auto' src={Cyethack}></img>
    <div className=' p-10 flex gap-8 w-[80%] mx-auto '>
          <img src={HeroImage}></img>
      <div className='flex flex-col justify-around  text-[#EBEDEA]'>
      <h1 className='text-3xl'>We're on a mission to bring ideas to life.</h1>
      <p>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create even the most powerful of products.</p>
      <hr className='w-[90%] mx-auto'></hr>
      {Object.keys(mission).map((key) => {
        const { heading, description, logo } = mission[key];
        return (
          <div className=' flex gap-4' key={key}>
          <img src={logo} alt={logo} />
          <div className='flex flex-col '>
            <h2 className='text-xl'>{heading}</h2>
            <p>{description}</p>
            </div>
          </div>
        );
      })}
      <button className='h-[50px] w-[30%] rounded-full bg-[#0A7643]'>Join our Team</button>
      </div>

    </div>

    <Navbar></Navbar>

    <p className='mt-[5%] w-[60%] mx-auto text-center text-[#C7C7C7] text-4xl'>Businesses all over the world feel 
 secured with Cyethack.</p>
    <div className='mt-[5%] flex justify-around w-[80%] mx-auto'>
        {/* Iterate over the object and print the name and description */}
        {Object.entries(obj).map(([key, value]) => (
          <div key={key} className="mt-5">
            <p className="text-center text-[#43E785] font-bold text-3xl">{value.name}</p>
            <p className="text-center text-[#C7C7C7] text-lg">{value.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default HeroSection
