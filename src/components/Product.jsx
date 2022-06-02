import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to="/product" className="product">
      <div>
        <img className="product__img" src="/assets/1.png" alt="" />
        <h2 className="product__title">Striker Combat</h2>
        <span>1200 $</span>
      </div>
    </Link>
  );
};

export default Product;
