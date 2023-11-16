import React from 'react';
import imperial from '../contact/assets/imperial.jpeg';

function Contact() {
  return (
    <div className=''>
        <div className='text-center text-lg p-3 bg-black text-white'>Contact us</div>
        <div className=' w-[1110px] h-[442px] py-[50px] bg-gray-100 mt-[100px]  m-auto'>
                <div className='w-full h-[36px] pl-[55px] py-[40px] shadow-md bg-white text-center text-2xl font-thin italic'>Corporate Office</div>
                <div className=' grid-flow-col grid grid-cols-2  gap-10 p-5'>
                    <div className='ml-[100px] text-center w-[350px]'>
                        <p className='text-xl text-blue-700 font-semibold'>Acsurge India</p>
                        <p className='border-b pb-3 border-l my-2 text-sm'>C-502 , Imperial Square,G.B Road,Naglabunder ,Thane west</p>
                        <p className='border-b border-l my-2 p-3 text-sm'>Phone    +91 87796 86726</p>
                        <p className='border-b border-l my-2 p-3 text-sm'>Email  sales@acsurgeindia.com</p>
                    </div>
                    <div className='col-span-[100px] text-center  items-center'><img className='w-[350px]' src={imperial} alt='imperial_square' /></div>
                </div>
        </div>
        
    </div>
  )
}

export default Contact