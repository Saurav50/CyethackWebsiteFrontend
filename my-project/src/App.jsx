import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="mx-auto my-auto bg-[url('./assets/react.svg')] w-[500px] h-[500px]">
      <p className='pt-[50%] text-3xl'>Welcome to Cyethack !!</p>
     </div>
  

    </>
  )
}

export default App
