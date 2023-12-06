import React from 'react';
import Slider from 'react-slick';
import prev from '../images/prev-arrow.png';
import next from '../images/next-arrow.png';
import { CiDiscount1 } from 'react-icons/ci';
import { BsLaptop } from 'react-icons/bs';
import { PiTelevisionSimpleLight } from 'react-icons/pi';
import { BsHeadphones } from 'react-icons/bs';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import { BsSpeaker } from 'react-icons/bs';
import { FaComputer } from 'react-icons/fa6';
import brand1 from '../images/brands/brand_1.jpg';
const BrandCarousel = () => {
  const SampleNextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src={next}/>
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src={prev}/>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className='brand-carousel-container'>
      <Slider {...settings}>
        <div>
          <img src={brand1} alt="brand_1_logo"/>
        </div>
        <div>
          <img src={brand1} alt="brand_1_logo"/>
        </div>
        <div>
          <p><PiTelevisionSimpleLight/></p>
          <h4>Televisions</h4>
        </div>
        <div>
          <p><BsHeadphones/></p>
          <h4>Headphones</h4>
        </div>
        <div>
          <p><AiOutlineMobile/></p>
          <h4>Mobile</h4>
        </div>   
        <div>
          <p><BsCamera/></p>
          <h4>Photography</h4>
        </div>
        <div>
          <p><BsSpeaker/></p>
          <h4>Speakers</h4>
        </div>
        <div>
          <p><FaComputer/></p>
          <h4>Computer</h4>
        </div>
      </Slider>
    </div>
  );
};

export default BrandCarousel;
