import React, { useState,useEffect } from 'react'
//import { MyContext } from '../Helper/AppContext'
import a4 from '../assets/a4.jpeg';
function Navbar() {
  return (
   <>
   

   <nav className="fixed top-0 left-0 right-0 flex justify-center items-center mt-2 text-4xl">
  <div className="font-serif">
    <a href="" className="flex justify-center space-x-3 rtl:space-x-reverse">
      <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/external-makeup-supermarket-photo3ideastudio-lineal-photo3ideastudio.png" alt="makeup"/>
      <span className="self-center text-yellow-800 font-semibold whitespace-nowrap">
        <u>KiyaMakeover18</u>
      </span>
    </a>
  </div>
</nav>

<img className='text-center ml-20 mt-16 size-52 rounded-full ' src={a4} alt="external-makeup-hobbies-and-interest-smashingstocks-mixed-smashing-stocks"/>
   <div className='fixed top-0 left-0 right-0 mt-10 ml-96 text-3xl cursor-pointer'>
    Contact
   </div>
   </>
  )
}

export default Navbar
