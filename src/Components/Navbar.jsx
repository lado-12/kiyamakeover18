import React, { useState,useEffect } from 'react'
//import { MyContext } from '../Helper/AppContext'
import a4 from '../assets/a4.jpeg';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  return (
   <>
   

   

<img className='text-center ml-20 mt-16 size-52 rounded-full ' src={a4} alt="external-makeup-hobbies-and-interest-smashingstocks-mixed-smashing-stocks"/>
   <div className="flex justify-end items-center">
      <button className="block md:hidden" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <a href="#" className="text-white py-2 px-4 hover:bg-gray-800">Contact</a>
            {/* Add more menu items as needed */}
          </div>
        </div>
      )}
    </div>
   </>
  )
}

export default Navbar
