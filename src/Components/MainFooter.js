import React from "react";
import { Animated } from "react-animated-css";
const MainFooter = () => {
  return (
    <div className="mainFooterBlock">
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutDown"
        animationInDuration={2000}
        isVisible={true}
      >
        <ul className="under_slide_ul">
          <a
            className="twit"
            href="https://twitter.com/s_armenian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-twitter"></span>
          </a>
          <a
            className="fb"
            href="https://www.facebook.com/SS-Armenian-Brand-102956644511223/?modal=admin_todo_tour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-facebook-square"></span>
          </a>
          <a
            className="inst"
            href="https://www.instagram.com/s_s_armenian_brand5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-instagram"></span>
          </a>
        </ul>
      </Animated>
    </div>
  );
};
export default MainFooter;
