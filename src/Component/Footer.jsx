import React from "react";
import py from "../assets/py.png";
import astore from "../assets/astore.svg";

import "../Style/footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  let circleClasses ={
    width:"20px",
    padding:"10px",
  };
  let iconStyles = {
    color: "rgb(105, 104, 104)",
    fontSize: "1.2em",
   
  };
  return (
    <div className="footer-container">
      <div className="footer-property">
        <div className="left">
          <div className="footer-title">
            <h2>Find Property</h2>
            <span>Select from thousands of options, without brokerage.</span>

            <div className="footer-btn">
              <button>Find Now</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="right">
          <div className="footer-title">
            <h2>List Your Property</h2>
            <span>For Free. Without any brokerage.</span>
            <div className="footer-btn">
              <button>Free Posting</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-link">
        <a href="#">Careers</a>
        <a href="#">About Us</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Testimonials</a>
        <a href="#">Setmap</a>
        <a href="#">FAQ</a>
      </div>
      <div className="footer-link-img">
        <img src={py} alt="py" />
        <img src={astore} alt="astore" />
      </div>
      <div className="footer-social-link">
        <span>
          <FaFacebookF style={iconStyles} />
        </span>
        <span >
          <FaTwitter style={iconStyles} />
        </span>
        <span>
          <FaInstagram style={iconStyles} />
        </span>
        <span >
          <FaLinkedin style={iconStyles} />
        </span>
        <span >
          <FaYoutube style={iconStyles} />
        </span>
     
      </div>
      <div className="end">
        <span>© 2013-23 NoBroker Clone Created For Learning by #Shubh.</span>
      </div>
      
    </div>
  );
};

export default Footer;
