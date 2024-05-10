import React, { useState,useEffect } from 'react'
//import { MyContext } from '../Helper/AppContext'
import a1 from '../assets/a1.jpeg';
function Navbar() {
  return (
   <>
   

<nav className="flex fixed top-0 w-auto mt-2 text-4xl">
  <div class=" items-center font-serif ">
    <a href="" class="flex space-x-3 rtl:space-x-reverse ml-10">
    <img width="80" height="90" src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/external-makeup-supermarket-photo3ideastudio-lineal-photo3ideastudio.png" alt="makeup"/>
        <span class="self-center text-yellow-800 font-semibold whitespace-nowrap "><u>KiyaMakeover18</u></span>
    </a>
   </div>
   <img className='mt-20 ml-72 mb-20 size-64 rounded-full ' src={a1} alt="external-makeup-hobbies-and-interest-smashingstocks-mixed-smashing-stocks"/>
       
</nav>

   </>
  )
}

export default Navbar
