import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {

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
    <div className='flex flex-col'>
        <h1 className='text-center bg-black text-white text-3xl p-2'>List of All Products</h1>
        <ul className='flex flex-row gap-5 justify-center items-center mt-5'>
            {product.map((pro,index)=>(
                <div key={index} className='flex flex-col justify-center items-center rounded-xl w-[200px] h-[200px] bg-slate-100 p-2'>
                    <li className='bg-white'><img className='w-[200px] h-[150px]' src={`http://localhost:5000/uploads/${pro.productImage.filename}`} alt='products'/></li>
                    <li><p className='text-center p-2 text-white rounded-lg bg-slate-600 m-4'>{pro.productName}</p></li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default ProductList