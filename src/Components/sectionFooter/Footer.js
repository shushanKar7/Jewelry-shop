import React from "react";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-distributed">
        <div className="footer-left">
          <span className="leftText">Get in Touch</span>
          <p className="leftTextP">
            Be the first to know about exciting new designs, special events,
            <br />
            store openings and much more
          </p>
          <form>
            <div className="input-group">
              <input type="text" name="EMAIL" placeholder="Email"></input>
            </div>
            <button className="subscribe">Subscribe</button>
          </form>
          <br />
          <p className="footer-company-name">© 2019 Silver & Stone</p>
        </div>
        <div className="footer-center">
          <div>
            <span className="centerText">Contact Us</span>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>1/7 Alek 0025, Manukian St,</span>
              Yerevan 0070
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+374 00 00 00 00</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                silver-stone@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Our online shop allows you to shop by intentions, such as Love &
            Friendship, Serenity & Calmness and many more! Each intention
            gathers a selection of gemstones to attract a specific energy that
            you desire in order to restore balance and live your life to the
            fullest potential.
          </p>
          <div className="footer-icons">
            <a>
              <i className="fa fa-facebook"></i>
            </a>
            <a>
              <i className="fa fa-twitter"></i>
            </a>
            <a>
              <i className="fa fa-instagram"></i>
            </a>
            <a>
              <i className="fa fa-linkedin"></i>
            </a>
            <a>
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;