import React from 'react'
import Analyze from "../../assets/Analyze.svg"
import Automate from "../../assets/Automate.svg"
import Automate2 from "../../assets/Automate2.svg"
import Monitor from "../../assets/Monitor.svg"
import Respond from "../../assets/Respond.svg"
import Secure from "../../assets/Secure_The_System.svg"
function Tools() {
    let obj1={
        Automate:{
          name:"Automate",
          heading:"Save time by scheduling Scans",
          details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
          logo:Automate
        },
        Respond:{
          name:"Respond",
          heading:"Report to teams across the board with ease",
          details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
          logo:Respond
        },
        Automate2:{
          name:"Automate",
         heading:"Truly automate your social media",
         details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
         logo:Automate2
        },
        Monitor:{
          name:"Monitor",
          heading:"Listen to what they say about you",
          details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
          logo:Monitor
        },
        Analyze:{
          name:"Analyze",
          heading:"Detailed insights for your social media",
          details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
          logo:Analyze
        },
         Secure_The_System:{
          name:"Secure the system",
          heading:"Artificial Intelligence trained Team",
          details:"Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
          logo:Secure
        },
        
        
      }
  return (
    <div>
      <div className=' grid grid-cols-3 grid-rows-2  gap-x-3 gap-y-3'>
          {/* Iterate over the obj1 and display header, paragraph, logo, and details */}
          {Object.values(obj1).map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#DCDCDC] to-[#767676] flex flex-col border-[1px] p-5 rounded-md mt-5">
            <button className='w-[30%] rounded-full p-3 bg-[#FFFFFF]'>{item.name}</button>
              <p className="text-left text-[#C7C7C7] text-2xl">{item.heading}</p>
              <p className="text-left text-[#C7C7C7]">{item.details}</p>
              <hr className='text-[white] w-[100%] '></hr>
              <div className='flex  justify-between'>
              <img className="" src={item.logo} alt={item.name} />
              <button className='rounded-full p-3 bg-[#FFFFFF]'>Get Started</button>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-[5%]'>
        </div>
    </div>

  )
}

export default Tools
