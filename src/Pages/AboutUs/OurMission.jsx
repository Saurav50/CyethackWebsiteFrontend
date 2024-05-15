import React from 'react'
import Tick from "../../assets/Tick.svg"
import OurClient from "../../assets/AboutUsImages/OurClients.svg"
function OurMission() {
  return (
    <div className='mt-[10%] p-10 items-center justify-between w-[80%] mx-auto flex gap-4'>
    <div className='flex flex-col justify-between text-[#DBDBDB]'>
      <h1 className=' mb-[5%] text-3xl text-left'>Our Mission</h1>
      <p>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create.</p>
       
      <div className='flex gap-2 mt-[10%]'>
      <img src={Tick}></img>
       <p>Scheduling the  scans with ease.</p>
    </div>
    <div className='flex gap-2 mt-[3%]'>
      <img src={Tick}></img>
       <p>Working with cross functional teams with ease.</p>
    </div>
    <div className='flex gap-2  mt-[3%]'>
      <img src={Tick}></img>
       <p>The Future of securing your systems.</p>
    </div>

    </div>
    <img src={OurClient}></img>
    </div>
  )
}

export default OurMission
