import React from 'react'

function DisplayProduct({product}) {   
    const imageUrl = product.productImage && product.productImage.filename
    ? `http://localhost:5000/uploads/${product.productImage.filename}`
    : '';

    return (
    <>  <div className='containerdis2 h-fit gap-1 justify-around w-fit bg-white'>
            <img src={imageUrl} alt='product'/>
            <div className='displayProd w-full h-fit'>
                <h3>ProductId : {product.productId}</h3>
                <h3>ProductName : {product.productName}</h3>
                <h3>ProductPrice : {product.productPrice}₹</h3>
                <h3>ProductDesc : {product.productDescription}</h3>
            </div>

        </div>
    </>
  )
}

export default DisplayProduct