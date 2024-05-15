import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import AboutUs from './Pages/AboutUs/AboutUs';
import Product from './Pages/Product/Product';
function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>

    
    
  )  
}

export default App
