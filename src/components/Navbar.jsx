import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link className="nav__logo" to="/">
          UFPRO
        </Link>
      </div>
      <ul className="nav__list">
        <li>
          <Link className="nav__list--item" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav__list--item" to="/about">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="nav__list--item" to="/">
            CONTACT US
          </Link>
        </li>
      </ul>
      <div className="nav__icons">
        <PersonOutlineOutlinedIcon
          fontSize="2rem"
          className="nav__icons--icon"
        />
        <Link to="/cart" style={{ color: 'inherit' }}>
          <ShoppingBagOutlinedIcon
            fontSize="2rem"
            className="nav__icons--icon"
          />
        </Link>
        <div className="nav__icons--badge">3</div>
        <MenuIcon fontSize="2rem" className="nav__icons--icon" />
      </div>
    </div>
  );
};

export default Navbar;
