import React from 'react';
import { Link } from 'react-router-dom';

const Desktops = () => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
        <h2>Desktop</h2>
        {products.map((product) => (
            <div key={product.id}>
            <Link to={`/shop/computer-laptop/desktops/${product.id}`}>{product.name}</Link>
            </div>
        ))}
    </div>
  );
};

export default Desktops;
