import React from 'react';

import Marquee from "react-fast-marquee";
import facebook from "../../assets/AboutUsImages/facebook.svg"
import inltech from "../../assets/AboutUsImages/Ini_tech.svg"
import google from "../../assets/AboutUsImages/Google.svg"
import umbrella from "../../assets/AboutUsImages/Umbrella.svg"


function ClientMarquee() {
    let clients={
        facebook:{
            description:"One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare.",
            logo:facebook
        },
        inltech:{
            description:"One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare.",
            logo:inltech
        },
        umbrella:{
            description:"One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare.",
            logo:google
        },
        google:{
            description:"One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare.",
            logo:umbrella
        }
    }
  return (
    <div className=' mt-[10%'>
    <p className='text-[#DBDBDB] mt-[10%] text-4xl text-center'>Our Clients</p>
    <Marquee>
      <div className='flex mt-[2%]'>
      {Object.entries(clients).map(([key, value]) => (
          <div key={key} className="mx-2 rounded-lg py-5 px-4 bg-[#F6F6F6] w-[400px] h-[200px] border-[1px]  mt-5">
           <img src={value.logo}></img>
            <p className="mt-[2%] text-left text-[#808080] text-lg">{value.description}</p>
          </div>
        ))}
       </div>
            </Marquee>
    </div>
  )
}

export default ClientMarquee
