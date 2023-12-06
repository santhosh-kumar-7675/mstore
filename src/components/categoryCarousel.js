import React from 'react';
import Slider from 'react-slick';
import prev from '../images/prev-arrow.png';
import next from '../images/next-arrow.png';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { BsLaptop, BsHeadphones, BsCamera, BsSpeaker } from 'react-icons/bs';
import { PiTelevisionSimpleLight } from 'react-icons/pi';
import { AiOutlineMobile  } from 'react-icons/ai';
import { FaComputer } from 'react-icons/fa6';
import { IoWatchOutline } from "react-icons/io5";
import { LuProjector , LuPrinter } from "react-icons/lu";
import { MdOutlineCamera } from "react-icons/md";

const MultiItemSliderWithArrows = () => {
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
    <div className='category-carousel'>
      <Slider {...settings}>
        <div>
          <p><CiDiscount1/></p>
          <h4><Link to="/">Super Deals</Link></h4>
        </div>
        <div>
          <p><BsLaptop/></p>
          <h4><Link to="/shop/computer-laptop/laptops">Laptops</Link></h4>
        </div>
        <div>
          <p><PiTelevisionSimpleLight/></p>
          <h4><Link to="shop/television/smart-televisions">Televisions</Link></h4>
        </div>
        <div>
          <p><BsHeadphones/></p>
          <h4><Link to="shop/mobile-tablet/headphones">Headphones</Link></h4>
        </div>
        <div>
          <p><AiOutlineMobile/></p>
          <h4><Link to="shop/mobile-tablet/mobile-phones">Mobile Phones</Link></h4>
        </div>
        <div>
          <p><BsCamera/></p>
          <h4><Link to="shop/cameras">Cameras</Link></h4>
        </div>
        <div>
          <p><BsSpeaker/></p>
          <h4><Link to="shop/television/speakers">Speakers</Link></h4>
        </div>
        <div>
          <p><FaComputer/></p>
          <h4><Link to="/shop/computer-laptop/desktops">Desktops</Link></h4>
        </div>
        <div>
          <p><IoWatchOutline/></p>
          <h4><Link to="shop/mobile-tablet/wearables">Smart Wacthes</Link></h4>
        </div>
        <div>
          <p><LuProjector/></p>
          <h4><Link to="shop/television/projectors">Projectors</Link></h4>
        </div>
        <div>
          <p><LuPrinter /></p>
          <h4><Link to="/shop/computer-laptop/printers">Printers</Link></h4>
        </div>
        <div>
          <p><MdOutlineCamera /></p>
          <h4><Link to="shop/cameras/lenses">Lenses</Link></h4>
        </div>
        
      </Slider>
    </div>
  );
};

export default MultiItemSliderWithArrows;
