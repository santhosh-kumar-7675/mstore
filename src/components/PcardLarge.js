import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import { Col, Card, Carousel } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const PCardLarge = ({ product }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };
    const arrowStyles = {
        color: 'black',
        fontSize: '30px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)', 
    };
    const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1

    const increaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };

    return (
        <Col className="mb-4">
        <Card
            className='PcartTop text-left'
            style={{
            width: '100%',
            height: '50rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            position: 'relative',
            }}
        >
            <div className='carousel-wapper p-4'>
                <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                style={{ flex: '1' }}
                indicators={false} 
                prevIcon={<BsChevronLeft style={{ ...arrowStyles, left: '-20px' }} />} 
                nextIcon={<BsChevronRight style={{ ...arrowStyles, right: '-20px', top:'46.5%'}} />} 
                >
                {product.images.map((image, index) => (
                    <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Product ${index + 1}`}
                        style={{ maxHeight: '350px', objectFit: 'contain' }}
                    />
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            {product.images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                style={{ width: '18%', height:'80px', margin: '5px 5px', cursor: 'pointer' }}
                onClick={() => setActiveIndex(index)}
                />
            ))}
            </div>

            <div style={{ flex: '0', position: 'relative', zIndex: '2', padding: '10px' }}>
            <Card.Text className='card-brand'>{product.brand}</Card.Text>

            <Card.Title style={{ fontSize: '28px' }} className="ellipsis-text">
                <Link to={`/shop/${product.category}/${product.subcategory}/${product.id}`}
                    style={{textDecoration:'none' , color:'inherit'}}>
                    {product.name}
                </Link>
            </Card.Title>
            <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '5px' }}>
                ₹ {product.price}
            </Card.Text>
            <StarRatings
                rating={product.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name={`rating-${product.id}`}
                starDimension="15px"
                starSpacing="2px"
            />
            
            </div>

            <div className='PcardLarge-btn-wapper' style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <div className='quantity-buttons' style={{fontSize:'20px'}}>
                    <Button style={{fontSize:'20px'}} onClick={decreaseQuantity}>-</Button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <Button style={{fontSize:'20px'}} onClick={increaseQuantity}>+</Button>
                </div>

                <Button id='add2cardPCL' onClick={() => alert(`Added to Cart: ${product.name}`)}>
                    <MdOutlineAddShoppingCart  className='mr-2'/>  Add to Cart
                </Button>

                <Button style={{fontSize:'20px'}} onClick={() => alert(`Added to Wishlist: ${product.name}`)}>
                    <FiHeart  style={{paddingBottom:'2px'}} />
                </Button>
                <Button style={{fontSize:'20px'}} onClick={() => alert(`Added to Compare: ${product.name}`)}>
                    <FaBalanceScale style={{paddingBottom:'2px'}} />
                </Button>
            </div>
        </Card>
        </Col>
    );
};
export default PCardLarge;
