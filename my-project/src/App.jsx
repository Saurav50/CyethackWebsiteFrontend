import { useState } from 'react'
import cyethack from './assets/Cyethack.svg'
import Analyze from "./assets/Analyze.svg"
import Automate from "./assets/Automate.svg"
import Automate2 from "./assets/Automate2.svg"
import Monitor from "./assets/Automate2.svg"
import Respond from "./assets/Respond.svg"
import TenYears from "./assets/TenYears.svg"
import Secure from "./assets/Secure_The_System.svg"
import NavBar from './Components/NavBar'
import GroupPeople from "./assets/GroupPeople.svg"
import HowWeWork from "./assets/How_We_Work.svg"
import Tick from "./assets/Tick.svg"
import SocialMedia from "./assets/SocialMedia.svg"
import NewDevice from "./assets/NewDevice.svg"
import BuisnessStrategy from "./assets/BuisnessStrategy.svg"
import FreeTrial from "./assets/FreeTrial.svg"
import Demo from "./assets/Demo.svg"
import Frame from "./assets/BackgroundFrame.svg"
import HeroSection from './Pages/HomePage/HeroSection'
import './App.css'
import Features from './Pages/HomePage/Features'
import Tools from './Pages/HomePage/Tools'
import ContactUs from './Pages/HomePage/ContactUs'
import GetStarted from './Pages/HomePage/GetStarted'
import Brands from './Pages/HomePage/Brands'
import NewsArticles from './Pages/HomePage/NewsArticles'
import SevenDayTrial from "../src/assets/SevenDayTrial.svg"
import SevenDayTrialTop from "../src/assets/SevenDayTop.svg"
import Footer from './Pages/HomePage/Footer'
import Trial from './Pages/HomePage/Trial'
import HomePage from './Pages/HomePage/HomePage'
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
    <div>
   <HomePage></HomePage>
    </div>

    
    
  )  
}

export default App
