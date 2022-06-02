import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <h1 className="footer-logo">Muhmmad UFO.</h1>
        <p className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: '#3B5999' }}>
            <FacebookIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: '#E4405F' }}>
            <InstagramIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: '#55ACEE' }}>
            <TwitterIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: '#E60023' }}>
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h2>Useful Links</h2>
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Woman Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h2 className="title">Contact</h2>
        <div className="contact-item">
          <RoomIcon style={{ marginRight: '10px', color: '#024e82' }} /> Mashhad
          City / Ghasem Abad!
        </div>
        <div className="contact-item">
          <PhoneIcon style={{ marginRight: '10px', color: '#024e82' }} /> +98
          937 1700 671
        </div>
        <div className="contact-item">
          <EmailOutlinedIcon
            style={{ marginRight: '10px', color: '#024e82' }}
          />{' '}
          Muhmmad.ufo.313@gmail.com
        </div>
        <img className="payment" src="/assets/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
