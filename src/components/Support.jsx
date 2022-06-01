import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/Support';
import RefreshIcon from '@mui/icons-material/Refresh';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Support = () => {
  return (
    <div className="support">
      <div className="support__item">
        <div className="support__item__title">
          <LocalShippingIcon
            fontSize="10rem"
            className="support__item__title--icon"
          />
          <h2 className="support__item--header">FREE SHIPPING</h2>
        </div>
        {/* <br /> */}
        <span className="support__item--desc">
          Enjoy free shipping on all orders above 100$
        </span>
      </div>
      <div className="support__item">
        <div className="support__item__title">
          <SupportIcon
            fontSize="10rem"
            className="support__item__title--icon"
          />
          <h2 className="support__item--header">SUPPORT 24/7</h2>
        </div>
        {/* <br /> */}
        <span className="support__item--desc">
          Our support team is there for queries
        </span>
      </div>
      <div className="support__item">
        <div className="support__item__title">
          <RefreshIcon
            fontSize="10rem"
            className="support__item__title--icon"
          />
          <h2 className="support__item--header">3 DAY RETURN</h2>
        </div>
        {/* <br /> */}
        <span className="support__item--desc">
          Simply return it whitin days for an exchange
        </span>
      </div>
      <div className="support__item">
        <div className="support__item__title">
          <FingerprintIcon
            fontSize="10rem"
            className="support__item__title--icon"
          />
          <h2 className="support__item--header">100% PAYMENT SECURE</h2>
        </div>
        {/* <br /> */}
        <span className="support__item--desc">
          Our payments are secured whit 256 bit encription
        </span>
      </div>
    </div>
  );
};

export default Support;
