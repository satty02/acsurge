import React from 'react'
import img1 from '../ourWorks/asset/1.jpg'; 
import img2 from '../ourWorks/asset/2.jpg'; 
import img3 from '../ourWorks/asset/3.jpg'; 
import img4 from '../ourWorks/asset/4.jpg'; 
import img5 from '../ourWorks/asset/5.jpg'; 
import img6 from '../ourWorks/asset/6.jpg'; 
import img7 from '../ourWorks/asset/7.jpg'; 
import img8 from '../ourWorks/asset/8.jpg'; 
import img9 from '../ourWorks/asset/9.jpg'; 
import img10 from '../ourWorks/asset/10.jpg'; 
import img11 from '../ourWorks/asset/11.jpg'; 
import img12 from '../ourWorks/asset/12.jpg'; 


function OurWorks() {
  return (
    <div>
        <h1 className="heading"> HVAC WORKS </h1>
        <p className="desc">Click on the next card for transition👉</p>
        <div className="container">
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img1} alt='1'/>
                <h3>DALMIA CEMENTS</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img2} alt='1'/>
                <h3>ANANDRATHI WEALTH</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
                <img src={img3} alt='1'/>
                <h3>OBEROI FLIGHT SERVICES</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img4} alt='1'/>
                <h3>ANANDRATHI WEALTH</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img5} alt='1'/>
                <h3>ANANDRATHI WEALTH</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img6} alt='1'/>
                <h3>ANANDRATHI WEALTH</h3>
            </div>        
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img7} alt='1'/>
                <h3>ANANDRATHI WEALTH</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img8} alt='1'/>
                <h3>MSC BANK</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }}>
            <img src={img9} alt='1'/>
                <h3>Image1</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }}>
            <img src={img10} alt='1'/>
                <h3>Image1</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img11} alt='1'/>
                <h3>Image1</h3>
            </div>
            <div className="panel" style={{ backgroundImage: 'url(./photos/1.jpg)' }} >
            <img src={img12} alt='1'/>
                <h3>Image1</h3>
            </div>
            
        </div>
    </div>
  )
}

export default OurWorks