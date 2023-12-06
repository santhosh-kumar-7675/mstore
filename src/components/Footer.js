import React from 'react';
import { Container, Form , Col , Row } from 'react-bootstrap';
import SubscribeForm from '../components/SubscribeForm';
import { MdOutlineHeadsetMic } from "react-icons/md";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaFacebookSquare , FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { FaSquareXTwitter  , FaSquarePinterest  } from "react-icons/fa6";
import payment_logos from '../images/payment.png';
import logo from '../images/logo.jpg';

const Footer = () => {
  return (
    <div className="footer-wrapper mt-4">
      <Container className="newsletter p-4 d-flex flex-column flex-md-row mb-4">
        <div className="mb-3 mb-md-0" style={{ width: '100%' }}>
          <h3>Sign Up to Newsletter</h3>
        </div>
        <div className="mb-3 mb-md-0 d-flex align-items-center" style={{ width: '100%' }}>
          <p>Get updates by subscribing to our weekly newsletter</p>
        </div>
        <div style={{ width: '100%' }}>
          <Form>
            <SubscribeForm />
          </Form>
        </div>
      </Container>

      <Container className='footer-section  p-2'>
        <Row className='mt-4'>
          <Col lg={4} md={12} sm={6} xs={12} className='my-4'>
            <img src={logo} alt='logo'/>
            <div className='phone-no d-flex my-4'>
              <MdOutlineHeadsetMic style={{
                fontSize:'70px',
                color:'#D70018',
                marginRight:'5px'
              }}/>
              <div>
                <p style={{ margin:'0' , color: "#6C757D"}}>Got questions? Call us 24/7!</p>
                <p style={{ color:'#D70018' , fontSize:'30px' , fontWeight:'500'}}>99999 88888</p>
              </div>
            </div>
            <div className='address'>
                <h5> <LiaMapMarkedAltSolid/> Address</h5>
                <p style={{ margin:'0' , color: "#6C757D"}} >7 Morval Rd, London SW2 1DG, UK</p>
            </div>

            <div className='social-media d-flex'>
                <p><FaFacebookSquare/></p>
                <p><FaInstagramSquare/></p>
                <p><FaYoutubeSquare/></p>
                <p><FaSquareXTwitter/></p>
                <p><FaSquarePinterest/></p>

            </div>
          </Col>
          <Col lg={2} md={3} sm={6} xs={12} >
            
            <ul>
              <li><h3>Find In Fast</h3></li>
              <li>Accessories</li>
              <li>Gaming</li>
              <li>Laptops &amp; Computer</li>
              <li>Mac Computers</li>
              <li>PC Computers</li>
              <li>Ultrabooks</li>
              
            </ul>
          </Col>
          <Col lg={2} md={3} sm={6} xs={12} >
            
            <ul>
              <li><h3>Information</h3></li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Suppliers</li>
              <li>Addresses</li>
              <li>Legal Notice</li>
              <li>Sitemap</li>
            </ul>

          </Col>
          <Col lg={2} md={3} sm={6} xs={12} >
            
            <ul>
              <li><h3>My account</h3></li>
              <li>Addresses</li>
              <li>Order history</li>
              <li>Guest tracking</li>
              <li>Stores</li>
              <li>Identity</li>
              <li>Suppliers</li>
            </ul>
          </Col>
          <Col lg={2} md={3} sm={6} xs={12} >
            
            <ul>
              <li><h3>Services</h3></li>
              <li>Electronics</li>
              <li>Toys</li>
              <li>Video Games</li>
              <li>Home Products</li>
              <li>Clothing</li>
              <li>Sports & Outdoors</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className='footer-section-bottom d-flex justify-content-between'>
        <div>
          <p>© 2023 - Ecommerce website by ABCDE™</p>

        </div>
        <div>
          <img src={payment_logos} alt='payment portols logs'/>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
