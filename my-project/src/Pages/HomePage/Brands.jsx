import React from 'react'
import ToolsImage from "../../assets/Tools.svg"
import Client from "../../assets/Client_Logo.svg"
import Tick from "../../assets/Tick.svg"
function Brands() {
  return (
    <div className='py-20 bg-cover bg-center  bg-no-repeat bg-[url("../src/assets/BackgroundFeatures.svg")]'>
      <div className='w-[80%] mx-auto'>
<img className=' mx-auto' src={Client}></img>
<div className='text-[#DBDBDB] flex  mt-[10%]'>
  <div className='w-[50%]'>
    <p className='font-bold text-3xl'>The Tool That Feels Like your Personal Security..</p>
    <p className='mt-[5%]'>Building an enterprise level site doesn't need nightmare or cost your thousands. CyeNet is purpose built for reducing the time of finding the vulnerabilities and patching them in no time.</p>
   
 
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
  <div>
  <img className='' src={ToolsImage}></img>
  </div>
</div>
</div>
    </div>
  )
}

export default Brands
