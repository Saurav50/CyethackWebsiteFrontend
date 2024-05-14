import React from 'react'
import cyethack from '../../assets/Cyethack.svg'
import NavBar from '../../Components/NavBar'

function HeroSection() {
    return (
        <div className='bg-no-repeat bg-[url(./assets/BackgroundFrame.svg)] w-[100%] mx-auto'>
            <div className="bg-gradient-radial from-[#47dc83] w-[100%] ">
                <div className='w-[80%] mx-auto'>
                    <img className='pt-[3%] mx-auto' src={cyethack}></img>

                    <div>
                        <p className='mt-[20%] text-center text-[white]  mx-auto text-6xl'>Your<span className='text-[#43E785]'>Privacy</span>, is Our <span className='text-[#20D91C]'>Priority</span></p>
                        <p className='mt-[2%] w-[30%] mx-auto text-[white] text-center'>Experience the true power of your security in real-time,
                            with our CyeNet suit powered by AI.</p>
                        <div className='mt-[2%] flex justify-center gap-4'>
                            <button className='border-[1px]  p-3 rounded-md bg-gradient-to-r from-#32AF73 to-#0DAB5F'>Experience the Product</button>
                            <button className='border-[1px] p-3 rounded-md bg-[#EBEDEA]'>Book an Appointment</button>
                        </div>
                    </div>
                </div>
                <div className='mt-[7%]'>
                    <NavBar></NavBar>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
