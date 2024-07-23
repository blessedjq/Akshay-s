import Card from "./Card";
import classes from '../styles/cardsscrol.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import img1 from'../assets/cardsimg/pic-1.jpg';
import img2 from'../assets/cardsimg/pic-2.jpg';
import img3 from'../assets/cardsimg/pic-3.jpg';
import img4 from'../assets/cardsimg/pic-4.jpg';
import img5 from'../assets/cardsimg/pic-5.jpg';
import img6 from'../assets/cardsimg/pic-6.jpg';
import img7 from'../assets/cardsimg/pic-7.jpg';
import img8 from'../assets/cardsimg/pic-8.jpg';
import icon1 from "../assets/cardslocons/Asset-1.png";
import icon2 from "../assets/cardslocons/Asset-2.png";
import icon3 from "../assets/cardslocons/Asset-3.png";
import icon4 from "../assets/cardslocons/Asset-4.png";
import icon5 from "../assets/cardslocons/Asset-5.png";
import icon6 from "../assets/cardslocons/Asset-6.png";
import icon7 from "../assets/cardslocons/Asset-7.png";
import icon8 from "../assets/cardslocons/Asset-8.png";
const CardsScroll=()=>{
    const datas=[
        {img:img1,text:'Sustainability',icon:icon1},
        {img:img2,text:'Experimentation',icon:icon2},
        {img:img3,text:'Detailed Documentaion',icon:icon3},
        {img:img4,text:'Coordination',icon:icon4},
        {img:img5,text:'Right for You',icon:icon5},
        {img:img6,text:'Creativity',icon:icon6},
        {img:img7,text:'Collaboration',icon:icon7},
        {img:img8,text:'Budget',icon:icon8},
    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className={` ${classes.container} slider-container`}>
            <Slider {...settings} style={{ width: '100%' ,zIndex:-1}}> 
            {datas.map((data,index)=>{return <Card img={data.img} icon={data.icon} text={data.text} key={index}/>})}
            </Slider>
        </div>
    );
}

export default CardsScroll;