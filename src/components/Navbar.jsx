import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">UFPRO</div>
      <ul className="nav__list">
        <li className="nav__list--item">home</li>
        <li className="nav__list--item">about</li>
        <li className="nav__list--item">contact us</li>
      </ul>
      <div className="nav__icons">
        <PersonOutlineOutlinedIcon
          fontSize="2rem"
          className="nav__icons--icon"
        />
        <ShoppingBagOutlinedIcon fontSize="2rem" className="nav__icons--icon" />
        <div className="nav__icons--badge">3</div>
        <MenuIcon fontSize="2rem" className="nav__icons--icon" />
      </div>
    </div>
  );
};

export default Navbar;
