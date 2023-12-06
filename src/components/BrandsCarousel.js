import React from 'react';
import Slider from 'react-slick';
import prev from '../images/prev-arrow.png';
import next from '../images/next-arrow.png';
import brand1 from '../images/brands/brand_1.jpg';
import brand2 from '../images/brands/brand_2.jpg';
import brand3 from '../images/brands/brand_3.jpg';
import brand4 from '../images/brands/brand_4.jpg';
import brand5 from '../images/brands/brand_5.jpg';
import brand6 from '../images/brands/brand_6.jpg';

const SampleNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <img src={next} alt="Next"/>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <img src={prev} alt="Prev"/>
  </div>
);

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 1000, 
    draggable: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className='brand-carousel-container'>
      <Slider {...settings}>
        <div className='brand-img-container'>
          <div className='brand-img'>
            <img  src={brand1} alt="Brand 1"/>
          </div>
        </div>
        <div className='brand-img-container'>
          <img src={brand2} alt="Brand 2"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand3} alt="Brand 3"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand4} alt="Brand 4"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand5} alt="Brand 5"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand6} alt="Brand 6"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand1} alt="Brand 1"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand2} alt="Brand 2"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand3} alt="Brand 3"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand4} alt="Brand 4"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand5} alt="Brand 5"/>
        </div>
        <div className='brand-img-container'>
          <img src={brand6} alt="Brand 6"/>
        </div>
      </Slider>
    </div>
  );
};

export default BrandCarousel;
