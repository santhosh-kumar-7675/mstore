import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const PCard = ({ product }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Card className='text-left p-3'
      style={{ textAlign: "left"}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-wrapper d-flex" >
        {product.images.length > 0 && (
          <div className='card-image'
            style={{
              width: '40%', 
              height: '300px', 
              overflow: 'hidden', 
              padding: '20px',
              margin: '0', 
            }}
          >
            <img
              src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit:"contain" }} 
            />
          </div>
        )}
        <Card.Body className="d-flex flex-column"
          style={{
            width: '60%', 
          }}
        >
          <Card.Text className='card-brand'>{product.brand}</Card.Text>
          <Card.Title style={{fontSize:'1.5rem'}} className="ellipsis-text mb-4">
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
            starDimension="20px"
            starSpacing="2px"
          />
          <Card.Text className='py-2'>₹{product.price}</Card.Text>
          
          <div className='buttons-wrapper d-flex'>
            <div>
              <Button className="mr-4 add2cart" onClick={() => alert(`Added to Cart: ${product.name}`)}>
                <MdOutlineAddShoppingCart style={{marginRight:'10px'}}/>Add to Cart
              </Button>
            </div>
            <div className='secondRowBtn'>
              <Button onClick={() => alert(`Added to Wishlist: ${product.name}`)}>
                <FiHeart />
              </Button>
              <Button  onClick={() => alert(`Added to Compare: ${product.name}`)}>
                <FaBalanceScale />
              </Button>
              <Button>
                <FiEye/>
              </Button>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default PCard;
