import { useState } from 'react'
import cyethack from './assets/Cyethack.svg'
import Analyze from "./assets/Analyze.svg"
import Automate from "./assets/Automate.svg"
import Automate2 from "./assets/Automate2.svg"
import Monitor from "./assets/Automate2.svg"
import Respond from "./assets/Respond.svg"
import TenYears from "./assets/TenYears.svg"
import Secure from "./assets/Secure_The_System.svg"
import Tools from "./assets/Tools.svg"
import NavBar from './Components/NavBar'
import GroupPeople from "./assets/GroupPeople.svg"
import HowWeWork from "./assets/How_We_Work.svg"
import Tick from "./assets/Tick.svg"
import Client from "./assets/Client_Logo.svg"
import SocialMedia from "./assets/SocialMedia.svg"
import NewDevice from "./assets/NewDevice.svg"
import BuisnessStrategy from "./assets/BuisnessStrategy.svg"
import FreeTrial from "./assets/FreeTrial.svg"
import Demo from "./assets/Demo.svg"
import Frame from "./assets/BackgroundFrame.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let obj={
    TenYears:{
      name:"Ten Years",
      description:"In Business"
    },
    SeventyFiveThousand:{
      name:"75,000+",
      description:"Customers"
    },
    HundreadThousand:{
      name:"100k+",
      description:"Monthly Blog Readers"
    },
    OnePointTwo:{
      name:"1.2m+",
      description:"Social Followers"
    }
  }

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

let result=Object.entries(articles);
console.log(result);

let tick={
  first:"Scheduling the  scans with ease.",
  second:"Working with cross functional teams with ease.",
  third:"The Future of securing your systems."
}

  return (
    <div className='bg-no-repeat bg-[url(./assets/BackgroundFrame.svg)] w-[80%] mx-auto'>
     <div className="bg-gradient-radial from-[#47dc83] w-[100%] ">
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
     
<div className='mt-[7%]'>
     <NavBar></NavBar>
</div>
     
     
     
     </div>
   <div className='mt-[30%] flex flex-col justify-center'>
   <img className='mx-auto w-[60%] ' src={TenYears}></img>
   <p className='mt-[5%] w-[30%] mx-auto text-center text-[#C7C7C7] text-4xl'>Businesses all over the world feel 
 secured with Cyethack.</p>
   </div>
   <div className='mt-[5%] flex justify-around w-[60%] mx-auto'>
        {/* Iterate over the object and print the name and description */}
        {Object.entries(obj).map(([key, value]) => (
          <div key={key} className="mt-5">
            <p className="text-center text-[#43E785] font-bold text-3xl">{value.name}</p>
            <p className="text-center text-[#C7C7C7] text-lg">{value.description}</p>
          </div>
        ))}
      </div>
      <hr className='w-[60%] mt-[5%] mx-auto text-[#DCDCDC]'></hr>
      <p className='text-center mt-[5%] text-xl text-[#C7C7C7]'>Join 1,60,000+ businesses like yours</p>
    
    <div className='flex justify-center mt-[1%]'>
    <button className='mx-auto bg-[black] rounded-full p-5 text-[#FFFFFF]'>Select a Plan</button>
    </div>

    
    <NavBar></NavBar>

    
    
    <div>
      <p className='text-center mt-[5%] text-[#C7C7C7] text-3xl'>Simple, yet Powerful Features</p>
      <div className='mt-[5%] flex justify-around w-[60%] mx-auto'>
        {/* Iterate over the object and print the name and description */}
        {Object.values(obj).map((value, index) => (
          <div key={index} className="mt-5">
            <p className="text-center text-[#43E785] font-bold text-3xl">{value.name}</p>
            <p className="text-center text-[#C7C7C7] text-lg">{value.description}</p>
          </div>
        ))}
      </div>

      <div className=' grid grid-cols-3 grid-rows-2  gap-x-3 gap-y-3'>
          {/* Iterate over the obj1 and display header, paragraph, logo, and details */}
          {Object.values(obj1).map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-#DCDCDC to-#767676 flex flex-col border-[1px] p-5 rounded-md mt-5">
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
        <NavBar></NavBar>
        </div>
    </div>
    
    <div className=' mt-[20%]'>
    <div className='flex justify-between '>
    <div className=''>
    <p className='mt-[5%] w-[60%] font-bold text-5xl  text-[#FFFFFF]'>Doing Everything
Yourself is Difficult</p>
    <p className='text-md mt-[1%] text-[#FFFFFF]' >Crush your security threats. Again and again</p>
    </div>

    <div className='my-auto'>
    <button className='bg-[black] text-[white] p-5 rounded-full'>Contact Us</button>
    </div>
</div>
    <img className='w-[100%] mt-[5%]' src={GroupPeople}></img>
    </div>
    <NavBar></NavBar>


<div className='mt-[20%]'>
  <img className='w-[100%]' src={HowWeWork}></img>
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

<div className='mt-[5%]'>
  <NavBar></NavBar>
</div>


<div>
<img className='mt-[20%] mx-auto' src={Client}></img>
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
  <img className='' src={Tools}></img>
  </div>
</div>
</div>
<NavBar></NavBar>
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
    <NavBar></NavBar>
    </div> 



    <div>
      <img src={FreeTrial} className='mx-auto w-[100%] mt-[20%]'></img>
      <NavBar></NavBar>
    </div>




    <div>
      <img src={Demo} className='mx-auto mt-[30%]'></img>
      <div className='bg-[#3E3E3E]'>
      <div>
        <div className='grid grid-cols-2 grid-rows-2'>
         
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
       <NavBar></NavBar>
      </div>
    </div>
    </div>

    
    
  )  
}

export default App
