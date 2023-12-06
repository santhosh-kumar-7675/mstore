import motorolaEdge40 from '../images/motorola-edge40.jpg'
import s23Lime from '../images/s23-lime.webp'
import razerBlade16 from '../images/razer-blade-16-mercury-desktop.jpg'
import banner1 from '../images/banner-1.jpg';
import banner2 from '../images/banner-2.jpg';
import banner3 from '../images/banner-3.jpg';
import banner4 from '../images/banner-4.jpg';
import banner5 from '../images/banner-5.jpg';
import banner6 from '../images/banner-6.jpg';
import banner7 from '../images/banner-7.jpg';
import banner8 from '../images/banner-8.jpg';
import profile1 from '../images/review profile/profile_1.avif'
import payment from '../images/icons/payment.png';
import return_icon from '../images/icons/return.png';
import delivery from '../images/icons/delivery.png';
import ticket from '../images/icons/ticket.png';
import { Container , Col , Row , Tabs , Tab } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import MultiItemSliderWithArrows from '../components/categoryCarousel';
import Products from '../components/Products';
import ProductCarousel from '../components/ProductCarousel';
import ProductsGrid from '../components/ProductGrid';
import ProductsGridRow from '../components/ProductGridRow';
import Slider from 'react-slick';
import BrandCarousel from '../components/BrandsCarousel';

const Home = ({products}) => {

  const largeCardProduct = Products[4];
  const featuredProductIds = [1, 3, 4, 6, 8 ,10 , 12, 15];  
  const onSaleIds = [2, 5, 7, 9, 14 ,16 , 18, 20];  
  const topRatedIds = [3, 4, 5, 6, 19 ,20 , 1, 7];
  const bestSellerIds = [2,  14, 15];  
  const newArrivalsIds = [18, 17, 4];  

  const bestSellerList = Products.filter(product => bestSellerIds.includes(product.id));
  const newArrivalsIList = Products.filter(product => newArrivalsIds.includes(product.id));

  const onSaleList = Products.filter(product => onSaleIds.includes(product.id));
  const featuredProductsList = Products.filter(product => featuredProductIds.includes(product.id));
  const topRatedList = Products.filter(product => topRatedIds.includes(product.id));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="homePage">
      
      <div>
      <MultiItemSliderWithArrows/>
      </div>
          <Container className='mt-3'>
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={false}
              infiniteLoop={true}
              showStatus={false}
              interval={3000}
            >
              <div>
                <img src={s23Lime} style={{transform: "scaleX(-1)"}} alt="Slide 1" />
                <div className='banner-slide'>
                    <div className='banner-details'>
                      <p>HOT SALE</p>
                      <h2 style={{color:"black"}}>SAMSUNG GALAXY S23</h2>
                      <p>ONLY</p>
                      <h2 style={{color:"#D70018"}}>$799.99</h2>
                      <button>Buy now</button>
                    </div>
                </div>
              </div>
              <div>
                  <img src={razerBlade16} alt="Slide 2" />
                  <div className='banner-slide'>
                    <div className='banner-details'>
                      <p>HOT SALE</p>
                      <h2 style={{color:"black"}}>RAZER BLADE 16</h2>
                      <p>ONLY</p>
                      <h2 style={{color:"#D70018"}}>$2,699.99</h2>
                      <button>Buy now</button>
                    </div>
                  </div>
              </div>
              <div>
                  <img src={motorolaEdge40} alt="Slide 3" />
                  <div className='banner-slide'>
                    <div className='banner-details'>
                      <p>HOT SALE</p>
                      <h2 style={{color:"black"}}>MOTOROLA EDGE 40</h2>
                      <p>ONLY</p>
                      <h2 style={{color:"#D70018"}}>$462.89</h2>
                      <button>Buy now</button>
                    </div>
                  </div>
              </div>
            </Carousel>
          </Container>

        <Container className="features my-4">
          <Row>
            <Col xs={12} md={3} className="text-center">
              <div className='d-flex flex-column align-items-center py-2 px-2'>
                <img src={delivery} alt="delivery icon" />
                <div className='mx-2'>
                  <h4>Free Delivery</h4>
                  <p>From $100</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div className='d-flex flex-column align-items-center py-2 px-2'>
                <img src={return_icon} alt="return icon" />
                <div className='mx-2'>
                  <h4>Return</h4>
                  <p>2 Week return</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div className='d-flex flex-column align-items-center py-2 px-2'>
                <img src={payment} alt="payment icon" />
                <div className='mx-2'>
                  <h4>Payment</h4>
                  <p>Secure payment</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div className='d-flex flex-column align-items-center py-2 px-2'>
                <img src={ticket} alt="brand icon" />
                <div className='mx-2'>
                  <h4>Brands</h4>
                  <p>Only best</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='p-2' >
          <Row className='py-2'>
            <Col className='col-md-4 img-fluid' xs="12">
            <div className='banner'>
                <img src={banner2} alt="banner 2" className="img-fluid" />
              </div>
            </Col>
            <Col  className='col-md-4 img-fluid' xs="12">
              <div className='banner'>
                <img src={banner1} alt="banner 1" className="img-fluid" />
              </div>
            </Col>
            <Col  className='col-md-4 img-fluid' xs="12">
              <div className='banner'>
                <img src={banner3} alt="banner 3" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row className='py-2'>
            <Col className='col-md-6 img-fluid' xs="12">
              <div className='banner'>
                <img src={banner4} alt="banner 4" className="img-fluid" />
              </div>
            </Col>
            <Col className='col-md-6 img-fluid' xs="12">
              <div className='banner'>
                <img src={banner5} alt="banner 5" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='p-2'>
          <div>
            <div className='headings'>
              <h2  className='left-title'>Deals of the Day</h2>
              {/* <p  className='right-button'>Ends in:<span style={{marginLeft:"5px"}}></span> Expired</p> */}
              <p  className='right-button'>&nbsp;</p>

            </div>
            <ProductCarousel products={Products} />
          </div>
        </Container>

        <Container className='p-2'>
          <Row className='py-2'>
            <Col xs="12" md="8">
              <div className='banner'>
                <img src={banner7} alt="banner 7" className="img-fluid" />
              </div>
            </Col>
            <Col  xs="12" md="4">
              <div className='banner'>
                <img src={banner8} alt="banner 8" className="img-fluid" />
              </div>  
            </Col>
          </Row>
        </Container>  

        <Container className='review'>
          <Row className='p-2'>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Slider {...settings}>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='profile-picture'>
                    <img src={profile1} alt="profile pic1" />
                  </div>
                  <div className='text-content py-2'>
                    <p>Sony X900F: Impressive 4K HDR Android TV with excellent picture quality, smooth motion handling, and a user-friendly interface. Consider external speakers for better audio. Overall, a solid choice for top-notch visuals and smart features.</p>
                    <h4>Candice Jonathan</h4>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='profile-picture'>
                    <img src={profile1} alt="profile pic1" />
                  </div>
                  <div className='text-content py-2'>
                    <p>Sony X900F: Impressive 4K HDR Android TV with excellent picture quality, smooth motion handling, and a user-friendly interface. Consider external speakers for better audio. Overall, a solid choice for top-notch visuals and smart features.</p>
                    <h4>Candice Jonathan</h4>
                  </div>
                </div>
              </Slider>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className='banner'>
                <img src={banner5} alt="banner 5" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='p-3'>
          <div className="view-all">
              <p>View all</p>
          </div>
          <Tabs defaultActiveKey="featured" id="my-tabs">
            <Tab eventKey="featured" title="Featured">
              <ProductsGrid products={[largeCardProduct , featuredProductsList, Products]} />
            </Tab>
            <Tab eventKey="onSale" title="On Sale">
              <ProductsGrid products={[largeCardProduct, onSaleList,Products]} />
            </Tab>
            <Tab eventKey="topRated" title="Top Rated">
              <ProductsGrid products={[largeCardProduct, topRatedList,Products]} />
            </Tab>
          </Tabs>
        </Container>

        <Container className='p-3'>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Container className='row-layout'>
                <div className='headings'>
                  <h2  className='left-title'>Bestseller</h2>
                  <p  className='right-button'>View all</p>
                </div>
                <ProductsGridRow products={[bestSellerList , Products]}/>
              </Container>
            </Col>

            <Col lg={4} md={4} sm={12} xs={12}>
              <Container className='row-layout'>
                <div className='headings'>
                  <h2  className='left-title'>New Arrivals</h2>
                  <p  className='right-button'>View all</p>
                </div>
                <ProductsGridRow products={[newArrivalsIList , Products]}/>

              </Container>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} className='p-2'>
              <div className='banner-part'>
                <img src={banner6} alt='banner 6' style={{ width:'100%', objectFit:'cover' }} />
              </div>
            </Col>

          </Row>
        </Container>
        {/* <BrandCarousel/> */}
    </div>
  );
};

export default Home;
