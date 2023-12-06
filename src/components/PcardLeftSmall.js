import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
const PCardLeftSmall = ({ product }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Card
      className='text-left'
      style={{ textAlign: 'left', width: '95%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-wrapper d-flex">
        {product.images.length > 0 && (
          <div
            className='card-image'
            style={{
              width: '40%', 
              height: '120px',
              overflow: 'hidden',
              margin: '10% auto',
            }}
          >
            <img
              src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '100%',    
                objectFit: 'contain',
              }}
            />
          </div>
        )}
        <Card.Body className="d-flex flex-column"
          style={{
            width: '60%', 
          }}
        >
          <Card.Text className='card-brand'>{product.brand}</Card.Text>

          <Card.Title className="ellipsis-text" style={{ fontSize: '15px' ,marginBottom:'1px' }}>
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
          <Card.Text style={{fontWeight:'600', color:'#D70018', margin:'0 2px'}} >₹{product.price}</Card.Text>

          <div className='add2cart-icon'>
            <Button onClick={() => alert(`Added to Cart: ${product.name}`)}>
              <MdOutlineAddShoppingCart />
            </Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default PCardLeftSmall;
