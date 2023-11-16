import React from 'react'
import ig1 from './asset/ig.png'
import twitter from './asset/twitter.jpg';
import fb from './asset/fb.png'
import logo2 from '../assets/VS_LOGO.png'

function Footer() {
  return (
    <>
        <div className="absolute top-[1350px] left-[0px] w-full h-[300px] text-sm bg-gray-100">
                <div className="absolute h-[9.33%] w-[16.88%] top-[88.67%] left-[46.6%] leading-[27.5px] inline-block">
                    All rights reserved - 2023
                </div>
                <div className="absolute h-[9.33%] w-[6.81%] top-[62.67%] left-[63.13%] leading-[27.5px] inline-block">
                    Blogs
                </div>
                <div className="absolute w-3/12 top-[68.33%] left-[1.74%] text-xl leading-[27.5px] inline-block">
                
                    salestengg@gmail.com
                </div>
                <p className="absolute w-3/12 top-[36%] left-[1.94%] text-xl leading-[27.5px] inline-block">
                    VS engineering offers supply of supply, Installation, Testing & commissioning of HVAC system  Air pollution control systems
                </p>
                <div className="absolute h-[9.33%] w-[6.81%] top-[52%] left-[63.13%] leading-[27.5px] inline-block">
                    Privacy Policy
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[33.33%] left-[63.13%] leading-[27.5px] inline-block">
                    FAQ
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[42.67%] left-[63.13%] leading-[27.5px] inline-block">
                    {`T  & C`}</div>
                <img className="absolute top-[24px] left-[2%] w-[159px] object-cover" alt="" src={logo2}/>
                <div className="absolute h-[9.33%] w-[4.03%] top-[22.33%] left-[63.13%] leading-[27.5px] inline-block">
                    Careers
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[34.33%] left-[52.29%] leading-[27.5px] inline-block">
                    Contact us
                </div>
                <div className="absolute h-[9.33%] w-[4.03%] top-[23.33%] left-[52.29%] leading-[27.5px] inline-block">
                    About us
                </div>
                <p className="absolute w-3/12 top-[22%] left-[2%] text-xl leading-[27.5px] inline-block">
                    Need Solutions. Choose VS.engineering 
                </p>
                <div className="absolute w-[6.04%] top-[11.67%] left-[52.29%] text-xl leading-[27.5px] font-extralight inline-block [-webkit-text-stroke:1px_#000]">
                    About
                </div>
                <div className="absolute w-[7.43%] top-[11.67%] left-[62.99%] text-xl leading-[27.5px] font-extralight font-roboto-flex inline-block [-webkit-text-stroke:1px_#000]">
                    Useful Link
                </div>
                <div className="absolute w-[7.43%] top-[11.67%] left-[76%] text-xl leading-[27.5px] font-tomorrow inline-block [-webkit-text-stroke:1px_#000]">
                    Follow us
                </div>
                <img className="absolute top-[80.5px] left-[79.5%] w-4 h-4 object-cover" alt="" src={ig1}/>
                <img className="absolute top-[78px] left-[78%] w-[22px] h-[22px] object-cover" alt="" src={twitter}/>
                <img className="absolute top-[75px] left-[76%] w-fit h-7 object-cover" alt="" src={fb}/>
                <div className="absolute top-[258.5px] left-[2.5%] box-border w-[95%] h-px border-t-[1px] border-dashed border-black"/>
            </div>
    </>
  )
}

export default Footer