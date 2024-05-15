import React from 'react'
import Vulnerablity from "../../assets/Product/VulnerablityScanner.svg"
import ManualPentest from "../../assets/Product/ManualPentest.svg"
import VulnerablityManagment from "../../assets/Product/VulnerablityManagment.svg"
import Reporting from  "../../assets/Product/Reporting.svg"
import Certification from "../../assets/Product/Certification.svg"
import Integration from "../../assets/Product/Integration.svg"
import DemoSuit from "../../assets/Product/DemoSuit.svg"
import CyenetLocation from "../../assets/Product/CyenetLocation.svg"
import ComplianceCheck from "../../assets/Product/ComplianceCheck.svg"
import LogedIn from "../../assets/Product/LogedIn.svg"
import ScanPWA from "../../assets/Product/ScanPWA.svg"

function CyeNetSuite() {
 
 let features={
    Vulnerablity:{
        name:"Vulnerablity Scanner",
        logo:Vulnerablity
    },
    ManualPentest:{
        name:"Manual Pentest",
        logo:ManualPentest
    },
    Vulnerablity2:{
        name:"Vulnerablity Managment",
        logo:VulnerablityManagment
    },
    Reporting:{
        name:"Reporting",
        logo:Reporting
    },
    Certification:{
        name:"Certification",
        logo:Certification
    },
    Integration:{
        name:"Integration",
        logo:Integration
    }

 }
    return (
    <div className=' mx-auto '>
      <h1 className='font-bold mt-[10%] text-3xl text-center text-[#EBEDEA]'>CyeNet Suit</h1>
      <div className='flex mt-[5%] justify-around'>
      {Object.keys(features).map((key) => (
          <div key={key} className="w-[5%] flex-col justify-center gap-2 flex m-4">
            <img className='w-[40%] mx-auto' src={features[key].logo} alt={features[key].name} />
            <p className="text-center  text-white">{features[key].name}</p>
          </div>
        ))}
        </div>
        <div className='text-[#DBDBDB] flex item-center justify-around mt-[10%]'>
            <img src={DemoSuit}></img>
            <div className='w-[30%]'>
                <img className='w-[50%]' src={CyenetLocation}></img>
                <h1 className='text-3xl mt-[5%]'>Stay ahead of hackers with your personal tool</h1>
                 <p>Astra’s vulnerability scanner has been built on years of security intelligence and data. Scan your assets with 8000+ tests and ensure you are covering every loophole.</p>
                <button className='w-[30%] bg-[#0D9252] mt-[5%] p-2 rounded-full'>Get Started</button>
            </div>
        </div>
        <div className='text-[#DBDBDB] flex item-center justify-around mt-[10%]'>
           <div className='w-[40%]'>
            <h1 className='text-3xl font-semibold'>8000+ tests</h1>
            <p className='mt-[5%]'>Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Consectetur ornare ornare eros lectus Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Fermentum arcu et neque et condimentum cras vitae lorem. </p>
           </div>
            <div className='w-[30%]'>
                <img  src={CyenetLocation}></img>
            </div>
        </div>
        <div className='text-[#DBDBDB] flex item-center justify-around p-10 mt-[10%]'>
        <div className='w-[30%]'>
                <img  src={ComplianceCheck}></img>
            </div>
           <div className='w-[40%]'>
            <h1 className='text-3xl font-semibold'>Compliance checks</h1>
            <p className='mt-[5%]'>Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Consectetur ornare ornare eros lectus Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Fermentum arcu et neque et condimentum cras vitae lorem. </p>
           </div>
        </div>
        <div className='text-[#DBDBDB] flex item-center justify-around mt-[10%]'>
           <div className='w-[40%]'>
            <h1 className='text-3xl font-semibold'>Scan logged-in pages</h1>
            <p className='mt-[5%]'>Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Consectetur ornare ornare eros lectus Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Fermentum arcu et neque et condimentum cras vitae lorem. </p>
           </div>
            <div className='w-[30%]'>
                <img  src={LogedIn}></img>
            </div>
        </div>
        <div className='text-[#DBDBDB] flex item-center justify-around p-10 mt-[10%]'>
        <div className='w-[30%]'>
                <img  src={ScanPWA}></img>
            </div>
           <div className='w-[40%]'>
            <h1 className='text-3xl font-semibold'>Scan PWA/SPAs apps</h1>
            <p className='mt-[5%]'>Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Consectetur ornare ornare eros lectus Fermentum arcu et neque et condimentum cras vitae lorem. Volutpat diam proin in lacinia ut. Fermentum arcu et neque et condimentum cras vitae lorem. </p>
           </div>
        </div>
    </div>
  ) 
}

export default CyeNetSuite
