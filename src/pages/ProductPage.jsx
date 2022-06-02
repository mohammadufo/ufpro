import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tab from '../components/Tab';

import StarIcon from '@mui/icons-material/Star';

const ProductPage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <div className="product-container">
        <div className="left">
          <img src="/assets/2.png" alt="" className="left-img" />
          <span className="left-badge">25%</span>
        </div>
        <div className="right">
          <h1 className="r-title">Striker Combot Shirt</h1>
          <div className="stars">
            <StarIcon fontSize="2rem" />
            <StarIcon fontSize="2rem" />
            <StarIcon fontSize="2rem" />
            <StarIcon fontSize="2rem" />
            <StarIcon fontSize="2rem" className="last" />
          </div>
          <div className="price">
            <span className="old-price">$250</span>
            <span className="new-price">$200</span>
          </div>
          <p className="r-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam,
          </p>
          <select aria-label="Select Size" className="select-size">
            <option value="first">Medium</option>
            <option value="second">Large</option>
            <option value="third">X Large</option>
          </select>
          <button className="btn">
            <span>ADD TO CART</span>
          </button>
          <span>Categoary : Striker, Delta</span>
          <span>Tags : ufpro, delta</span>
          <div className="colors">
            <span className="color1"></span>
            <span className="color2"></span>
            <span className="color3"></span>
            <span className="color4"></span>
          </div>
        </div>
      </div>
      <div className="tab">
        <Tab />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
