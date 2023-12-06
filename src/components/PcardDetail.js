import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';

const PCardDetail = ({ product }) => {
  const [isHovered, setHovered] = useState(false);

  return (
<Card
      className='text-left'
      style={{ textAlign: 'left', width: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-wrapper d-flex" style={{ display: 'flex', alignItems: 'center' }}>
        {product.images.length > 0 && (
          <div
            className='card-image'
            style={{
              width: '30%', 
              height: '250px',
              overflow: 'hidden',
              position: 'relative', 
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.2)' : 'transparent', 
              }}
            />
            <img
              src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '100%',    
                objectFit: 'contain',
              }}
            />
            {isHovered && (
              <div  className='eye-btn'
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              >
                <Button><FiEye/></Button>
              </div>
            )}
          </div>
        )}
        <Card.Body className="d-flex flex-column"
          style={{
            width: '60%', 
          }}
        >
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

          <div className='cart-btn mt-2'>
            <Button onClick={() => alert(`Added to Cart: ${product.name}`)}>
             <MdOutlineAddShoppingCart style={{marginRight:'2px'}} /> Add to cart
            </Button> 
            <Button><FiHeart/></Button>
            <Button><FaBalanceScale/></Button>
          </div>

          <div className='pcard-description'>
            <Card.Text style={{marginTop:'10px'}} className="description-ellipsis-text">{product.description}</Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default PCardDetail;
