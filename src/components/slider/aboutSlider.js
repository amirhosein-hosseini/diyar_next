import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutTeamItem from "../about/aboutTeamItem";

function AboutSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
        <AboutTeamItem />
      </Slider>
    </div>
  );
}

export default AboutSlider;