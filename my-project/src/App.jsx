import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-[url('./assets/react.svg')] w-[500px] h-[500px]"></div>
     <p className='bg-[red]'>Hello</p>
     <img src={reactLogo}></img>

    </>
  )
}

export default App
