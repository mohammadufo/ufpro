import React from 'react';
import Categoary from '../components/Categoary';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Support from '../components/Support';
import EndProducts from '../components/EndProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="title">
        <h1 className="tilte__header">Discover NEW Arrivalse</h1>
        <h3 className="tilte__desc">Recently Added Products</h3>
      </div>

      <div>
        <Products />
      </div>
      <Support />
      <div>
        <Categoary />
      </div>
      <EndProducts />
      <Footer />
    </div>
  );
};

export default Home;
