import React, {useEffect, useState } from 'react'
import DisplayProduct from './DisplayProduct'
import axios from 'axios';

function Products() {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState(null)
    const [product, setProduct] = useState({})
    const [allProducts , setAllProducts] = useState([]);

    const [editProductSelection, setEditProductSelection] = useState('');
    const [editId, setEditId] = useState('');
    const [editProductvalue, setEditProductvalue] = useState('');
    const [edit , setEdit] = useState(false);

    const handlechangeId =(e)=>{setId(e.target.value)}
    const handlechangeName =(e)=>{setName(e.target.value)}
    const handlechangePrice =(e)=>{setPrice(e.target.value)}
    const handlechangeDesc =(e)=>{setDesc(e.target.value)}
    
    const handlechangeImg =(e)=>{
        let file = e.target.files[0];
        setImg(file);
    }

 
    const submitProduct = async (e)=>{
        e.preventDefault();
        // react due to async nature does not update instantly before post request
        const newProduct = {
            productId:id,
            productName : name ,
            productPrice: price,
            productDescription: desc,
            productImage:img
        };

                try {
                   const response =  await axios.post('http://localhost:5000/uploads',newProduct, {
                        headers:{
                            "Content-Type":'multipart/form-data'
                        }
                    });
                    console.log(response)
                    setId('');
                    setName('');
                    setPrice('');
                    setDesc('');
                    setImg(null);
                }catch(er){
                    console.error(er);
                }
    }



    const handleClear = (e)=>{
        e.preventDefault();
        setProduct({
            productId:'',
            productName : '' ,
            productPrice: 0,
            ProductDescription: '',
            productImage:''
        })
    }

    const handleFetch = async ()=>{
        await axios.get(`http://localhost:5000/get`).then((data)=>{
            if(data.status!==200){
                return 'Error while feticng data'
            }else{
                return data.data
            }
        }).then((data)=>{
            setAllProducts(data);
        })
    };

    useEffect(()=>{
        handleFetch();
    },[allProducts])

    const handleView =  async(e) =>{
        await axios.get(`http://localhost:5000/get`).then((res)=>{
            if(res.status!==200){
                return 'Error while fetching the data'
            }else{
                return res.data;
            }
        }).then((data)=>setProduct(data[e.target.value]))
    }


    // handling the delete request

    const handleDelete =async (e)=>{
        e.preventDefault();
        const fetchAllProduct = await allProducts;

        const deleteProduct = fetchAllProduct[e.target.value]
        console.log(deleteProduct);
        
        try{
            const response =  await axios.delete(`http://localhost:5000/delete` , {
                data: JSON.stringify(deleteProduct),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
        }catch(err){
            console.log(err);
        }

    }


    const handleEdit =async (e)=>{
        setEdit(true);
        const allProductsEdit = await allProducts;
        const edits = allProductsEdit[e.target.value];
        const {productId , productName, productPrice,productDescription,productImage,_id} = edits;
        setEditId(_id);
        setId(productId);
        setName(productName);
        setPrice(productPrice);
        setDesc(productDescription);
        setImg(productImage);
    };

    const handleEditSelection =(e)=>{
        setEditProductSelection(e.target.value)
    };

    const handleEditChange=(e)=>{
        setEditProductvalue(e.target.value)
    };

    const handleEditSubmit = async ()=>{
        let editData = {};
        editData[editProductSelection] = editProductvalue;
        let ids = await editId
        
        const editSend = {id:ids , edit:editData}

        const response = await axios.put('http://localhost:5000/edit' , editSend);

        console.log(response.data);
        setProduct(response.data);
    }


  return (
    <>
        <div className='Products'>
            <h2>Product Addition form</h2>
            <form onSubmit={submitProduct}>
                <div className='input'>
                    <input className='p-3 rounded-lg' onChange={handlechangeId} placeholder='ProductId' value={id}/>    
                </div>
                <div className='input'>
                    <input className='p-3 rounded-lg' onChange={handlechangeName} placeholder='Product Name' value={name}/>    
                </div>
                <div className='input'>
                    <input  className='p-3 rounded-lg'onChange={handlechangePrice} placeholder='Product Price' value={price}/>    
                </div>
                <div className='input'>
                    <input className='p-3 rounded-lg' onChange={handlechangeDesc} placeholder='Product Description' value={desc}/>    
                </div>
                <div className='ml-[-40px]'>
                    <input type='file' className='p-8 rounded-lg' onChange={handlechangeImg} accept='image/*'/>
                </div>    
                <div className=''>
                <button className='rounded-lg bg-green-700' type='submit'>Add</button> 
                </div>
            </form>
            <button className='rounded-lg' onClick={handleClear}>Clear</button> 
        </div>

        <div className='containerDis'>       
            <ul className='flex flex-wrap gap-1'>
                {allProducts.map((pro,index)=>{
                    return (<div className=' border m-1 p-2 bg-white justify-center items-center'>
                    <li key={index} className='text-sm text-center p-1 bg-slate-50 m-1'>{pro.productName}</li>
                    <button onClick={handleView} className='m-1 rounded-lg' value={index}>View</button>
                    <div>
                        <button className='m-1 rounded-lg' onClick={handleEdit} value={index}>Edit</button>
                        
                    </div>
                    <button className='m-1 rounded-lg' onClick={handleDelete} value={index}>Delete</button>
                    </div>)
                })}
            </ul>
            {edit && 
                            <div className='m-2 p-2 rounded-md bg-gray-200 flex flex-col justify-center items-center gap-2 h-fit'>
                                <p className='text-sm text-start'>Edit:</p>
                                <h2 className='border text-center p-2 bg-gray-400 rounded-lg text-lg w-full'>{name}</h2>
                                <select onChange={handleEditSelection} className='bg-slate-100 p-1 rounded-lg w-full'>
                                    <option>ProductId</option>
                                    <option>productName</option>
                                    <option>productPrice</option>
                                    <option>ProductDescription</option>
                                    <option>productImage</option>
                                </select>  
                                <input className='p-4 rounded-lg mx-2 w-full'  onChange={handleEditChange} value={editProductvalue} placeholder='enter value'/>
                                <button type='submit' className='bg-green-700 rounded-lg' onClick={handleEditSubmit}>submit</button>
                            </div>
                        }
            <DisplayProduct product={product} />
        </div>
    </>
  )
}

export default Products