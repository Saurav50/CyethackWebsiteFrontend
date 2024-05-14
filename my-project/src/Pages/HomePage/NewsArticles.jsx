import React from 'react'
import SocialMedia from "../../assets/SocialMedia.svg"
import NewDevice from "../../assets/NewDevice.svg"
import BuisnessStrategy from "../../assets/BuisnessStrategy.svg"
let articles={
    first:{
      image:SocialMedia,
      heading:"Detailed insights for your social media",
      description:"Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy."
    },
    second:{
      image:NewDevice,
      heading:"Detailed insights for your social media",
      description:"Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy."
    },
    third:{
      image:BuisnessStrategy,
      heading:"Detailed insights for your social media",
      description:"Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy."
    }
  }
function NewsArticles() {
  return (
    <div className='w-[80%] mx-auto'>
      <div className=' mt-[20%]'>
    <div className='flex justify-between '>
    <div className='w-[60%]'>
    <p className='mt-[5%] w-[100%] font-bold text-5xl  text-[#FFFFFF]'>Latest News and Articles</p>
    <p className='text-md mt-[1%] text-[#FFFFFF]' >We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.</p>
    </div>

    <div className='my-auto'>
    <button className='bg-[black] text-[white] p-5 rounded-full'>See More News</button>
    </div>
</div>
    <div className='flex gap-10 mt-[10%]'>
    {Object.entries(articles).map(([key, value]) => (
        <div key={key}>
            {/* Render the image for each article */}
            <img className='w-[100%]' src={value.image} alt={key} />
            <hr className='mt-[10%] w-[99%] mx-auto'></hr>
            <p className='text-[#C7C7C7] text-2xl'>{value.heading}</p>
            <p className='text-[#C7C7C7] mt-[10%]'>{value.description}</p>
            {/* Display the key (e.g., 'first', 'second', 'third') */}
  
        </div>
    ))}
    </div>
    </div>
    </div>
  )
}

export default NewsArticles
