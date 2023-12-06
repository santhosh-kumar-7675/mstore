import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { Col, Container, Row } from 'react-bootstrap';

const ProductDetailLayout = () => {
  const { id } = useParams();

  const product = Products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-layout-wrapper'>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12} >
            <div className='product-image-carousel'>

            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} >
            <div className='product-details'>
              <h2>{product.name}</h2>
              <p>Rating: {product.rating}</p>
              <p>Price: ₹{product.price}</p>
              <p>Brand: {product.brand}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </Col>
          
          <Col lg={2} md={6} sm={6} xs={12} >
            <div className='product-delivery-info'>
              

            </div>
          </Col>

        </Row>
      </Container>
      
      {/* <div>
        <img src={product.images[0]} alt={product.name} style={{ maxWidth: '100%' }} />
      </div> */}
      <p>{product.description}</p>
      <p>Offer: {product.offer}</p>
      <div>
        <h3>Product Highlights</h3>
        <ul>
          {product.highlight.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* <div>
        <h3>Specifications</h3>
        <ul>
        </ul>
      </div> */}
    </div>
  );
};

export default ProductDetailLayout;
