import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/VS_LOGO.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { gsap } from 'gsap';
import Courousel from './Courousel';
import OurClients from './OutClients';

function FrontPage() {

    const navigate = useNavigate();

    const [isOpen , setIsOpen] = useState(false);
    const options = [ 'HVAC Products','HVAC Services'];

    const aboutContentRef = useRef(null);
    const sideContentRef = useRef(null);

  useEffect(() => {
    const aboutContent = aboutContentRef.current;
    const sideContent = sideContentRef.current;
    

    // GSAP animation timeline
    const tl = gsap.timeline();

    // Initial state (hidden)
    tl.from(aboutContent, { duration: 0,height:0 ,bottom:0, opacity: 0, ease: 'Expo.easeInOut' });

    // Animation to reveal the content
    tl.to(aboutContent, {duration:2, width:"100%", height:'12%', opacity:1, ease: 'Expo.easeInOut'});
 
    tl.from(sideContent, { duration: 0,height:0, opacity: 0, ease: 'Expo.easeInOut' });
    tl.to(sideContent, {duration:2, width:"100%", height:'20%', opacity:1, ease: 'Expo.easeInOut'})
    // Call the animation when the component mounts
    tl.play();

    // Clean up the animation when the component unmounts
    return () => {
      tl.kill();
    };
  }, []);

    const handleOptionClick = (option)=>{
        // setSelectedOptions(option);
        option==='HVAC Products'? navigate('/products'):navigate('/services')
        setIsOpen(false);
    }

  return (
    <div className='relative'>
        <div className="flex justify-between bg-gray-200 shadow-2xl shadow-black">
            <div className="flex items-center bg-white mt-1  shadow-lg shadow-black p-2 rounded-md gap-3 font-bold text-2xl ml-[10px]">
                <img className ="w-[200x]" src={logo} alt="ACSURGE_LOGO"/>
            </div>	

            <div className="list">
                <ul className='flex gap-4 m-3 mr-[100px] text-white'>
                    <li className='bg-black p-2 px-3 rounded-md font-medium text-sm hover:bg-white hover:text-black'><a href="#home"> Home </a></li>
                    <li className='bg-black p-2 px-3 rounded-md font-medium text-sm hover:bg-white hover:text-black'><a href="#About"> About </a></li>
                    {/* Dropdown */}
                    <div className='custom-dropdown' onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
                        <div className={`selected-option bg-black p-2 px-3 rounded-md font-medium text-sm ${isOpen?"show":''}`}>Product & Services</div>
                        <div className={`options ${isOpen?"open":''} w-full`}>
                            {options.map((option,index)=>(
                                <div key={index} className='option text-black p-1 text-sm font-medium not-italic mt-1 ' onClick={()=>handleOptionClick(option)}>{option}</div>
                            ))}
                        </div>
                    </div>
                    <li className='bg-black p-2 px-3 rounded-md font-medium text-sm hover:bg-white hover:text-black'><a href="/Contact"> Contact us </a></li>
                    <li className='bg-black p-2 px-3 rounded-md font-medium text-sm hover:bg-white hover:text-black'><a href="#Enquiry"> Enquiry </a></li>
                    <li className='bg-black p-2 px-3 rounded-md font-medium text-sm hover:bg-white hover:text-black'><a href="./index.html"> Our Works </a></li>
                </ul>
            </div>
        </div>
        <div className=''>
            <Courousel/>
        </div>
        <div  ref={aboutContentRef} className=" w-0 bg-green-600 bg-opacity-80 text-center text-white" >
                <p>	VS engineering is a mechanical contractor firm in Thane that specializes 
                <br/>in proactive design and solution of Air conditioning,Industrial
                <br/> Ventilat ion and air pollution control for Industrial,Commercial,
                <br/> Educational, Hotels and Residential applications.<br/>
                <br/>The HVAC division’s activities span the entire value chain : proposal 
                <br/>engineering, design, project management and planning, procurement,
                <br/>quality assurance, System Validation/ Qualifications and on-time
                <br/>delivery of a superior quality project. The Company has been a key 
                <br/>participant in some of the biggest projects across sectors.
                </p>
            </div>
            <div ref={sideContentRef} className='absolute w-0 h-[20%] flex items-center justify-center bg-green-300 bg-opacity-30'>
                    <h1 className='text-blue-800 text-3xl text-center font-thin'>Get to HVAC Solution with our excellence in the field</h1>
            </div>

        
            <div className='mt-[250px] text-center'>
                <h1 className="text-5xl font-bold pb-4 pt-4 ">Our Clients</h1>
                <OurClients/>
            </div>
            
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default FrontPage