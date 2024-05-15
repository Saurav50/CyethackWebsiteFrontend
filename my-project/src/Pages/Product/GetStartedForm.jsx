import React from 'react'

function GetStartedForm() {
  return (
    <div className='text-[#DBDBDB] mt-[10%]'>
      <h1 className='text-center text-5xl'>Get Started...</h1>
      <p className='mx-auto w-[60%] mt-[2%] text-center'>Submit your details for a 14-day free trial and get full access to all of the powerful features of our unique, cloud-based vulnerability management platform.</p>
   
      
      <form className='mt-[10%] '>
   <div className='w-[80%] mx-auto grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10'>
      <div className='flex flex-col'>
      <p>First Name</p>
      <input className='outline-none border-[#8D8D8D] border-b-2 bg-transparent' type="Text"/>
      </div>
      
      <div className='flex flex-col'>
        <p>Last Name</p>
      <input className='outline-none border-[#8D8D8D] border-b-2 bg-transparent'  type="Text"/>
      </div>
      
      <div className='flex flex-col'>
      <p>Email</p>
      <input className='outline-none border-[#8D8D8D] border-b-2 bg-transparent'  type="email"/>
      </div>
      
      <div className='flex flex-col'>
     <p>Phone Number</p>
      <input className='outline-none border-[#8D8D8D] border-b-2 bg-transparent'  type="number"/>
    </div>
</div>
       <div className='w-[80%] mt-[5%] mx-auto gap-4 flex flex-col'>
     <p>Message</p>
      <input placeholder='Write Your Message..' className='outline-none border-[#8D8D8D] border-b-2 bg-transparent'  type="number"/>
    </div>
    <div className='mx-auto w-[80%] flex justify-center'>
      <button className='bg-gradient-to-b from-[#3E3E3E] px-8 py-4 to-[#1A1A1A]  gradient  mx-auto  mt-[10%]' type="submit">Send Message</button>
      </div>
    </form>
    </div>
  )
}

export default GetStartedForm
