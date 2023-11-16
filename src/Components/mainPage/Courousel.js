import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import wp1 from './asset/hvac1.jpg';
import wp2 from './asset/hvac2.jpg';
import wp3 from './asset/hvac3.jpg';
import wp4 from './asset/hvac4.jpg';

function Courousel() {
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev">
      Prev
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next">
      Next
    </button>
  );



  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        variableWidth:true,
        easing:'linear',
      };

    
      const images = [wp1,wp2,wp3,wp4];
  return (
    <div className="carousel-container ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} className='' alt={`carousel-item-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Courousel