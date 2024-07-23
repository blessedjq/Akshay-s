import React from 'react';
import classes from '../styles/ourproject.module.css';
import count1 from '../assets/ourprojects/count1.png';
import count2 from '../assets/ourprojects/count2.png';
import img1 from '../assets/ourprojects/img1.jpg';
import img2 from '../assets/ourprojects/img2.jpg';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProjects = () => {
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Our Projects</h1>
        <div className={classes.counts}>
          <img src={count1} alt='Project count 1' />
          <img src={count2} alt='Project count 2' />
        </div>
        <p>
          Let Design Lighting Consultants has been part of some of the world’s most prestigious architectural projects. Be it hotels or office buildings or residences, our lighting concepts are widely recognized. A few of our projects and associate projects are outlined below:
        </p>
        <Link to='/#'>View All Projects</Link>
      </div>
      <div className={`${classes.sliderContainer} slider-container`}>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.images} key={1}>
            <img src={img1} alt='Commercial Buildings' />
            <h2>___ Commercial Buildings</h2>
          </div>
          <div className={classes.images} key={2}>
            <img src={img2} alt='Hospitality' />
            <h2>___ Hospitality</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurProjects;
