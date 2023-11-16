import React, { useEffect, useState } from 'react';
import chiller from './assets/chiller.jpg';
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'
import image9 from './assets/9.jpg'
import image10 from './assets/10.jpg'
import image11 from './assets/11.jpg'
import image12 from './assets/12.jpg'
import axios from 'axios';

function System() {

    const [product, setProduct] = useState([])

   
    useEffect(()=>{
         axios.get(`http://localhost:5000/get`).then((res)=>{
        if(res.status!==200){
            return 'Error while fetching the data'
        }else{
            return res.data;
        }
    }).then((data)=>setProduct(data))

    },[]);
  return (
    <div className='flex flex-row justify-around bg-black'>
        <div className='flex flex-col text-center p-2 m-2 max-w-[350px] rounded-xl items-center bg-orange-50'>
            <h1 className='text-center text-xl px-3 m-1 font-semibold'>System Information</h1>
            <img className='w-[300px] m-3' src={chiller} alt='chiller'/>
            <p className='whitespace-pre-wrap text-start font-medium italic'>A chiller (cooling water circulation device) is a general term for a
                 device that controls the temperature by circulating a liquid such as 
                 water or heat medium as a cooling liquid whose temperature was adjusted 
                 by the refrigerant cycle. In addition to maintaining the temperature of 
                 various industrial devices and laboratory instruments, equipment and 
                 apparatuses at a constant level, it is also used for air conditioning 
                 in buildings and factories. It is referred to as a “chiller” because it
                  is often used for cooling.
                A chiller can supply chilled water continuously while circulating water 
                in a cooling device. It is used a lot as a suitable device to cool heat 
                generating parts and air conditioning equipment such as laser processing 
                devices and high frequency heating devices at a constant temperature, solves 
                various cooling problems and can reduce running costs while improving energy efficiency.
            </p>
        </div>
        <div className='bg-yellow-50 flex flex-col m-2 p-1 rounded-xl'>
            <h1 className='text-center m-2 text-xl font-bold text-gray-500'>Our Works</h1>
            <div className='flex flex-wrap gap-3 max-h-[650px] overflow-y-scroll'>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image1} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>AnandRathi</p>
                </div> 
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image2} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>Dalmia Cement</p>
                </div> 
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image3} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>Dalmia cement</p>
                </div> 
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image4} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image4} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image5} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image6} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image7} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image8} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image9} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image10} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image11} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
                <div className='w-[200px] flex flex-col justify-between bg-gray-100 items-center gap-5 '>
                    <img className='h-[150px]' src={image12} alt='works'/>
                    <p className='bg-black text-white w-full text-center'>MSC Bank</p>
                </div>
            </div>
             
        </div>
        <div className='m-2 bg-orange-50 rounded-xl'>
            <div className='flex flex-col'>
                <h1 className='text-center font-bold text-gray-700 text-xl rounded-xl p-2'>List of All Products</h1>
                <div className='max-h-[650px] overflow-y-scroll p-2'>
                    <ul className='flex flex-col gap-5 justify-center items-center '>
                        {product.map((pro,index)=>(
                            <div key={index} className='flex flex-col justify-center items-center rounded-xl w-[200px] h-[250px] bg-slate-100 p-2'>
                                <li className='bg-white'><img className='w-[200px] h-[150px]' src={`http://localhost:5000/uploads/${pro.productImage.filename}`} alt='products'/></li>
                                <li><p className='text-center p-2 text-white rounded-lg bg-slate-600 m-4'>{pro.productName}</p></li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default System