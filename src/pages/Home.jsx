
import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/c1.jpeg';
import image2 from '../assets/c2.jpeg';
import image3 from '../assets/c3.jpeg';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpeg';
import b3 from '../assets/b3.jpeg';
import b4 from '../assets/b4.jpeg';
import b5 from '../assets/b5.jpeg';
import b6 from '../assets/b6.jpeg';
import b7 from '../assets/b7.jpeg';
import b8 from '../assets/b8.jpeg';
import b9 from '../assets/b9.jpeg';
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpeg';
import a3 from '../assets/a3.jpeg';
import Footer from '../Components/Footer';
import Image from '../assets/a1.jpeg';

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
    <div className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-content'>
        <Navbar/>
        <div className='mt-32'>
        <div className='contaner  h-96 w-auto  rounded-full'>
         <div className=' text-5xl text-pink-600 mr-40 ml-40 flex'>
         <h1   className='text-6xl font-serif ml-10 mt-28'>
            {headerText}
        </h1>
         <img className='mt-20 ml-72 mb-20 size-64 rounded-full ' src={Image} alt="external-makeup-hobbies-and-interest-smashingstocks-mixed-smashing-stocks"/>
         </div>
        </div>

        </div>

<div className='flex self-center text-yellow-800 font-semibold whitespace-nowrap items-center ml-96 mr-96 p-4 font-serif w-full mt-8 z-30  text-6xl'>
  <u>The Beautiful Brides</u>
</div>
<div className='flex justify-items-center ml-10 '>



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
</div>

<div className=' text-yellow-800 font-semibold  text-center font-serif w-full mt-40 text-6xl'>
  
  <br/><u>Services</u>
</div>
<div className="ml-40 mt-20 h-auto w-auto "><img className='rounded-3xl' src={a2}/></div>

<div className=' text-yellow-800 font-semibold  text-center font-serif w-full mt-10 text-6xl'>
  
  <br/><u>Contact</u>
</div>
<div className="ml-40 mt-20 h-auto w-auto "><img className='rounded-3xl' src={a3}/></div>



        {/* <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={true} >
        <div className=' '>
        <img className='rounded-3xl h-96 w-auto mt-10' src={image1} />
        </div>
        <div className=''>
        <img className='rounded-3xl h-96 w-auto mt-10' src={image2} />
        </div>
        <div className=''>
        <img className='rounded-3xl h-96 w-auto mt-10' src={image3} />
        </div>
</Carousel> */}

<Footer/>
      
        </div>
  )
}

export default Home