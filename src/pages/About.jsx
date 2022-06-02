import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCart from '../components/AboutCart';

import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="a-top">
        <h1 className="a-top--title">
          <p>about ufpro</p>
        </h1>
      </div>
      <div className="a-center">
        <AboutCart />
      </div>
      <h1 className="team-title">Team</h1>
      <div className="team">
        <div className="member">
          <img src="/assets/user1.jpg" alt="" className="user-img" />
          <p>Jonas Schmedtmann</p>
        </div>
        <div className="member">
          <img src="/assets/user2.png" alt="" className="user-img" />
          <p>Maximilian Schwarzmüller</p>
        </div>
        <div className="member">
          <img src="/assets/user3.jpg" alt="" className="user-img" />
          <p>Robert Lewandowski</p>
        </div>
        <div className="member">
          <img src="/assets/user4.jpg" alt="" className="user-img" />
          <p>Karim Benzema</p>
        </div>
      </div>
      <h1 className="comment-title">Testimonials</h1>
      <div className="comment">
        <div className="c-left">
          <img alt="" src="/assets/comment3.jpg" className="c-img" />
        </div>
        <div className="c-right">
          <MapsUgcIcon className="c-icon" />
          <p className="c-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut
          </p>
          <p>Deta Force</p>
        </div>
      </div>
      <div className="comment">
        <div className="c-left">
          <img alt="" src="/assets/comment1.jpg" className="c-img" />
        </div>
        <div className="c-right">
          <MapsUgcIcon className="c-icon" />
          <p className="c-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut
          </p>
          <p>SAS</p>
        </div>
      </div>
      <div className="comment">
        <div className="c-left">
          <img alt="" src="/assets/comment2.jpg" className="c-img" />
        </div>
        <div className="c-right">
          <MapsUgcIcon className="c-icon" />
          <p className="c-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut
          </p>
          <p>Spets naz</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
