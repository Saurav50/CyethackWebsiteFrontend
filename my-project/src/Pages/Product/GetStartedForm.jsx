import React from 'react'

function GetStartedForm() {
  return (
    <div className='text-[#DBDBDB] mt-[10%]'>
      <h1 className='text-center text-5xl'>Get Started...</h1>
      <p className='mx-auto w-[60%] mt-[2%] text-center'>Submit your details for a 14-day free trial and get full access to all of the powerful features of our unique, cloud-based vulnerability management platform.</p>
   
      
      <form >
      <label>Email</label>
      <input type="email" />
  && <p>Email is required and must be valid</p>
      
      <label>Password</label>
      <input type="password"/>

      
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default GetStartedForm
