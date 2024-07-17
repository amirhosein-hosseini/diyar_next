import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";


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
      <div className={styles.heroSliderContainer + " w-full overflow-hidden h-[80vh] max-md:w-11/12 max-md:mx-auto max-md:h-[25vh] max-md:mt-20 max-md:rounded-lg"}>
        <img className="object-cover w-full h-full" src="../../images/heroslider.png" alt="image" />
      </div>
      <div className={styles.heroSliderContainer + " w-full overflow-hidden h-[80vh] max-md:w-11/12 max-md:mx-auto max-md:h-[25vh] max-md:mt-20 max-md:rounded-lg"}>
        <img className="object-cover w-full h-full" src="../../images/herobanner2.jpg" alt="image" />
      </div>
    </Slider>
  );
}