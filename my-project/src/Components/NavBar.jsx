import React from 'react'

let obj={
    AboutUs:{
        name:"About Us",
        link:"/AboutUs"
    },
    Product:{
        name:"Product",
        link:"/Product"
    },
    Services:{
        name:"Services",
        link:"/AboutUs"
    },
    Resources:{
        name:"Resources",
        link:"/AboutUs"
    },
    Company:{
        name:"Company",
        link:"/AboutUs"
    },
    ContactUs:{
        name:"Contact Us",
        link:"/AboutUs"
    }
}


function NavBar() {
  return (
    <div className='mt-[3%] w-[80%] p-5 mx-auto border-[2px] border-[] bg-[#3E3E3E] flex gap-20 justify-center'>
            {Object.keys(obj).map((key, index) => (
                <p className='text-[#9F9F9F]' key={index}>{obj[key].name}</p>
            ))}
        </div>
  )
}

export default NavBar
