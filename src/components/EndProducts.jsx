import React from 'react';
import EndProduct from './EndProduct';

const EndProducts = () => {
  return (
    <div className="endproducts">
      <EndProduct />
      <EndProduct />
      <EndProduct />
      <EndProduct />

      <a href="#1" className="endproducts__link">
        <span>buy now</span>
      </a>
    </div>
  );
};

export default EndProducts;
