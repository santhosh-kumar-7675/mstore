import Slider from 'react-slick';
import prev from '../images/prev-arrow.png';
import next from '../images/next-arrow.png';
import PCard from '../components/Pcard';
const ProductCarousel = ({ products }) => {
    
    const SampleNextArrow = ({ onClick }) => {
        console.log('Rendering SampleNextArrow');
        return (
          <div className="slick-arrow slick-next" onClick={onClick}>
            <img src={next} alt="Next" />
          </div>
        );
    };
      
      const SamplePrevArrow = ({ onClick }) => {
        console.log('Rendering SamplePrevArrow');
        return (
          <div className="slick-arrow slick-prev" onClick={onClick}>
            <img src={prev} alt="Prev" />
          </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    return (
        <div className='product-carousel-container'>
            <Slider {...settings}>
                {products.map((product) => (
                <PCard key={product.id} product={product} />
                ))}
            </Slider>
        </div>
    );
};


export default ProductCarousel;