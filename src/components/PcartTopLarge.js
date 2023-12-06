import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import { Col, Card , Container } from 'react-bootstrap';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom'; 

const PCardTopLarge = ({ product }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Col style={{padding:'0px'}} lg={6} md={6} sm={6} xs={12} className="mb-1">
      <Container style={{
        display:'flex',
        justifyContent: 'center'
      }}>
      <Card
        className='PcartTop text-left'
        style={{
          width: '90%',
          height: '510px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          position: 'relative',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className='card-image'
          style={{
            flex: '1',
            width: '75%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '5px',
            position: 'relative',
            alignSelf: 'center',
          }}
        >
          <img
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
            alt={product.name}
            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
        </div>

        <Card.Body style={{ flex: '0', position: 'relative', zIndex: '2', padding: '10px' }}>
        <Card.Text className='card-brand'>{product.brand}</Card.Text>
          <Card.Title style={{ fontSize: '15px' }} className="ellipsis-text">
            <Link to={`/shop/${product.category}/${product.subcategory}/${product.id}`}
              style={{textDecoration:'none' , color:'inherit'}}>
              {product.name}
            </Link>
          </Card.Title>
          <StarRatings
            rating={product.rating}
            starRatedColor="orange"
            numberOfStars={5}
            name={`rating-${product.id}`}
            starDimension="15px"
            starSpacing="2px"
          />
          <Card.Text style={{ color: '#D70018', fontSize: '15px', fontWeight: '600', marginTop: '5px' }}>
            ₹{product.price}
          </Card.Text>
        </Card.Body>

        <div
          className='hover-btn'
          style={{
            position: 'absolute',
            top: '15px',
            right: '10px',
            display: isHovered ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          <Button onClick={() => alert(`Added to Wishlist: ${product.name}`)}>
            <FiHeart />
          </Button>
          <Button onClick={() => alert(`Added to Compare: ${product.name}`)}>
            <FaBalanceScale />
          </Button>
          <Button>
            <FiEye />
          </Button>
        </div>

        <div className='add2cart-icon'>
          <Button onClick={() => alert(`Added to Cart: ${product.name}`)}>
            <MdOutlineAddShoppingCart />
          </Button>
        </div>
      </Card>
     </Container>
    </Col>
  );
};

export default PCardTopLarge;
