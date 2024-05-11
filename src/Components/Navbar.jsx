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
   <div className="bg-gray-200 h-screen w-64 fixed left-0 top-0 pt-16">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">Email</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">Phone</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">Address</a>
          </li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default Navbar
