import React from 'react'
import HowWeWork from "../../assets/How_We_Work.svg"
function GetStarted() {

    let obj2={
        one:{
          name:"01",
          header:"Take the most advanced security product",
          description:"Building ddfgan enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built."
        },
        two:{
          name:"02",
          header:"Connect your channels",
          description:"Building ddfgan enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built."
        },
        three:{
          name:"03",
          header:"Schedule your Scans",
          description:"Building ddfgan enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built."
        },
        four:{
          name:"04",
          header:"Inter Communicate between teams easily",
          description:"Building ddfgan enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built."
        },
      }

  return (
    <div>
      <div className='py-10 bg-gradient-to-t from-[#84fab0] to-[#8fd3f4]'>
<div className='w-[80%] mx-auto'>
<div className=''>
  <img className='w-[100%]' src={HowWeWork}/>
</div>
<div className='mt-[5%] flex justify-between '>
        {/* Iterate over the object and print the name and description */}
        {Object.entries(obj2).map(([key, value]) => (
          <div key={key} className="grid grid-rows-3 mx-3">
            <p className="text-left  text-[#43E785]  font-bold text-3xl">{value.name}</p>
            <p className="text-left  text-[#C7C7C7] text-2xl font-bold">{value.header}</p>
            <p className="text-left  text-[#808080] text-lg">{value.description}</p>
          </div>
        ))}
      </div>
</div>
</div>
    </div>
  )
}

export default GetStarted
