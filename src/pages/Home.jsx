
import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpeg';
import b3 from '../assets/b3.jpeg';
import b4 from '../assets/b4.jpeg';
import b5 from '../assets/b5.jpeg';
import b6 from '../assets/b6.jpeg';
import b7 from '../assets/b7.jpeg';
import b8 from '../assets/b8.jpeg';
import b9 from '../assets/b9.jpeg';

import a2 from '../assets/a2.jpeg';
import a3 from '../assets/a3.jpeg';
import Footer from '../Components/Footer';


function Home() {
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const text = "On a budget, you can still make your day even more beautiful.";
    let currentText = '';
    
    const interval = setInterval(() => {
      currentText = text.substring(0, currentText.length + 1);
      setHeaderText(currentText);

      if (currentText === text) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='bg-gradient-to-r from-purple-400 to-pink-400 '>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <Navbar/>
        
         <h1   className=' text-center  text-yellow-800 font-semibold font-serif text-2xl'>
            {headerText}
        </h1>
          
       

<div className='text-center  text-yellow-800 font-semibold font-serif  mt-8 mb-20 text-4xl'>
  <u>The Beautiful Brides</u>
</div>

<Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={true} >
       
        <img
      radius="md"
      src={b1}
    />
      
        
        <img
      radius="md"
      src={b2}
    />
        
        <img
      radius="md"
      src={b3}
    />
       
        <img
      radius="md"
      src={b4}
    />
        
        <img
      radius="md"
      src={b5}
    />
        
        <img
      radius="md"
      src={b6}
    />
        
        <img
      radius="md"
      src={b7}
    />
       
        <img
      radius="md"
      src={b8}
    />
       
        <img
      radius="md"
      src={b9}
    />
       
</Carousel>





{/* <div className='flex justify-items-center ml-10 '>



  <div className="w-96 h-96 ml-10"><img className='rounded-3xl' src={b1}/></div>
  <div className=" w-96 h-96 ml-10"><img className='rounded-3xl' src={b2}/></div>
  <div className="w-96 h-96 ml-10"><img className='rounded-3xl' src={b4}/></div>
  </div>
<br/>
<br/>
<div className='flex justify-items-center ml-10'>
  <div className=" w-96 h-96 ml-10 mt-20"><img className='rounded-3xl' src={b5}/></div>
  <div className="w-96 h-40 ml-10 mt-20"><img className='rounded-3xl' src={b3}/></div>
  <div className=" w-96 h-96 ml-10 mt-20"><img className='rounded-3xl' src={b6}/></div>
  </div>
  <div className='flex justify-items-center ml-10 mb-40'>
  <div className="w-96 h-96 ml-10 mt-40"><img className='rounded-3xl' src={b7}/></div>
  <div className="w-96 h-96 ml-10 mt-40"><img className='rounded-3xl' src={b8}/></div>
  <div className="w-96 h-96 ml-10 mt-40 "><img className='rounded-3xl' src={b9}/></div>
</div> */}

<div className=' text-yellow-800 font-semibold  text-center font-serif w-full text-2xl'>
  
  <br/><u>Services</u>
</div>
<div className="ml-20 mt-20 h-auto w-auto "><img className='rounded-3xl' src={a2}/></div>

<div className=' text-yellow-800 font-semibold  text-center font-serif w-full mt-10 text-2xl'>
  
  <br/><u>Contact</u>
</div>
<div className="ml-20 mt-20 h-auto w-auto "><img className='rounded-3xl' src={a3}/></div>




<Footer/>
      
        </div>
  )
}

export default Home
