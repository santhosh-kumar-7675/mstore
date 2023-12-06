import React from 'react';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';

const PCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <div className="d-flex">
        {/* Display the image on the left */}
        {product.images.length > 0 && (
          <Card.Img
            variant="top"
            src={product.images[0]} // Assuming you want to display the first image
            alt={product.name}
            style={{ width: '100px', height: 'auto' }} // Adjust the width as needed
          />
        )}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          {/* Add rating component */}
          <StarRatings
            rating={product.rating}
            starRatedColor="orange"
            numberOfStars={5}
            name={`rating-${product.id}`}
            starDimension="20px"
            starSpacing="2px"
          />
          {/* Add other product details as needed */}
        </Card.Body>
      </div>
    </Card>
  );
};

export default PCard;
