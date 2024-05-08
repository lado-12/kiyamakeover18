import React, { useState,useEffect } from 'react'
//import { MyContext } from '../Helper/AppContext'

function Navbar() {
  return (
   <>
   

<nav className="flex fixed top-0 w-full mt-2 z-30  text-6xl">
  <div class=" items-center mx-auto p-4 font-serif ">
    <a href="" class="flex space-x-3 rtl:space-x-reverse ml-10">
    <img width="80" height="90" src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/external-makeup-supermarket-photo3ideastudio-lineal-photo3ideastudio.png" alt="makeup"/>
        <span class="self-center text-yellow-800 font-semibold whitespace-nowrap "><u>KiyaMakeover18</u></span>
    </a>
   </div>
   
</nav>

   </>
  )
}

export default Navbar