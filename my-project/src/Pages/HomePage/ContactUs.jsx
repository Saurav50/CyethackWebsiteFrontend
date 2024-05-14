import React from 'react'
import GroupPeople from "../../assets/GroupPeople.svg"
function ContactUs() {
  return (
    <div>
       <div className='bg-gradient-to-br from-[#538E37]  to-[#47CADC] mt-[20%]'>
    <div className='flex justify-between w-[80%] mx-auto'>
    <div className=''>
    <p className='mt-[5%] w-[60%] font-bold text-5xl  text-[#FFFFFF]'>Doing Everything
Yourself is Difficult</p>
    <p className='text-md mt-[1%] text-[#FFFFFF]' >Crush your security threats. Again and again</p>
    </div>

    <div className='my-auto'>
    <button className='bg-[black] text-[white] p-5 rounded-full'>Contact Us</button>
    </div>
</div>
    <img className='w-[80%] mx-auto mt-[5%]' src={GroupPeople}></img>
    </div>
    </div>
  )
}

export default ContactUs
