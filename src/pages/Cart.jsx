import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Cart = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <div className="wrapper">
        <h1 className="c-title">YOUR BAG</h1>

        <div className="bottom">
          <div className="info">
            <div className="cart-product">
              <div className="product-detail">
                <img src="/assets/1.png" alt="" className="p-image" />
                <div className="detail">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="p-color" />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="price-detail">
                <div className="product-amount-container">
                  <span>
                    <AddCircleIcon className="shop-icon" />
                  </span>
                  <div className="product-amount">2</div>
                  <span>
                    <RemoveCircleIcon className="shop-icon" />
                  </span>
                </div>
                <div className="product-price">$ 30</div>
              </div>
              <hr className="hr" />
            </div>
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Subtotal</span>
              <span className="summary-item-price">$ 80</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">Shipping Free</span>
              <span className="summary-item-price">FREE !!</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">total</span>
              <span className="summary-item-price">$ 80</span>
            </div>

            <button className="chekout-button">
              <span>CHECKOUT NOW</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
