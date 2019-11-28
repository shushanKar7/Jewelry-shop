import img1 from "../../Images/SlideShow/slide1.jpg";
import img2 from "../../Images/SlideShow/slide2.jpg";
import img3 from "../../Images/SlideShow/slide3.jpg";
import img4 from "../../Images/SlideShow/slide4.jpg";
import img5 from "../../Images/SlideShow/slide5.jpg";
import React from "react";
import { Slide } from "react-slideshow-image";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import MainFooter from "../MainFooter";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  },
  images = [img1, img2, img3, img4, img5];
const Slideshow = () => {
  return (
    <div className="containerSlide" >
      
      <Slide {...properties}>
        {images.map((image, index) => {
          return (
            <div className="each-slide" key={index}>
              <div>
                <div
                  className={"image"}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <HeaderNavbar />
                  <MainFooter />
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};
export default Slideshow;
