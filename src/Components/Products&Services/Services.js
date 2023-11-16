import React from 'react'
import arrow from './assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import System from './System';


function Services() {
    
    const Navigate = useNavigate();

    const handleClick = ()=>{
        Navigate('/systems')
    }

  return (
    <div>
        <h1 className="text-center bg-black text-white p-5 text-3xl">Services</h1><br/>
        <div className='flex gap-4 justify-between'>
            <div className='bg-slate-50 w-[300px]'>
                <h1 className='text-center text-lg p-1 bg-white shadow-md items-center'>Installation</h1>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Chilled Water System</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} onClick={handleClick} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>VRV/VRF System</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} onClick={handleClick} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>DX System</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Package Ac</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Ventilation & Air pollution control</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Fume Extraction systems</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Dust collection systems</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Scrubber systems</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                <div className='shadow p-2 flex flex-row justify-between  items-center'>
                    <p className=''>Kitchen Ventilation systems</p>
                    <button className='border w-[14px] h-[14px] mt-0'><img src={arrow} alt='arrow'/></button>
                </div>
                
            </div>
            <div className='bg-slate-50 w-[300px]'>
                <h1 className='text-center text-lg p-1 bg-white shadow-md items-center'>Design and Estimations</h1>
                <p className='shadow p-2'>Sales Costing</p>
                <p className='shadow p-2'>Design of System</p>
                <p className='shadow p-2'>Shop floor drawings</p>
                <p className='shadow p-2'>Conceptual design & drawings</p>
               
            </div>
            <div className='bg-slate-50 w-[300px]'>
                <h1 className='text-center text-lg p-1 bg-white shadow-md items-center'>After Sales Service</h1>
                <p className='shadow p-2'>AMC Service</p>
                <p className='shadow p-2'>CMC Service</p>
                <p className='shadow p-2'>Commissioning of HVAC Systems</p>
            </div>
        </div>
        
    </div>
  )
}

export default Services