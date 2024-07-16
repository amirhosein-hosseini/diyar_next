import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HeroSlider() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="w-full overflow-hidden h-[80vh]">
        <img className="object-cover w-full" src="../../images/heroslider.png" alt="image" />
      </div>
      <div className="w-full overflow-hidden h-[80vh]">
        <img className="object-cover w-full" src="../../images/herobanner2.jpg" alt="image" />
      </div>
    </Slider>
  );
}