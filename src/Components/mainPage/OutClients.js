import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anandrathi from './asset/logos/anandrathi.webp';
import itc from './asset/logos/itc.png';
import dalmia from './asset/logos/dalmia.webp';
import image from './asset/logos/images.png';
import jsw from './asset/logos/jsw.jpg';
import msc from './asset/logos/msc.jpeg';
import rcf from './asset/logos/rcf.jpeg';
import tata from './asset/logos/tata.png';
import vedanta from './asset/logos/vedanta.jpeg';
import welspun from './asset/logos/welspun.png';

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>, 
    nextArrow: <></>,
  };

  const images = [
    anandrathi, itc, dalmia, image, jsw, msc, rcf, tata, vedanta, welspun
  ];

  return (
    <div style={{ height: '100px' , width:'100%' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img key={index} className="w-[200px] h-[200px]" src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
