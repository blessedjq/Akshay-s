import { useRef, useEffect,useState } from 'react';
import classes from '../styles/home.module.css';
import Navbar1 from '../components/Navbar1';
import { Link } from 'react-router-dom';
import CardsScroll from '../components/CardsScroll';
import OurProjects from '../components/OurProjects';
import OurServices from '../components/OurServices';

const Home = () => {
    const videoRef = useRef(null);
    const [shownav2, setShowNav2] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition >= 100.0) {
        setShowNav2(true);
      }else{
        setShowNav2(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.loop = true;
        }
    }, []);

    return (
        <>
            <div className={classes.cover1}>
                <video ref={videoRef} src="assets/homebanner.mp4" type="video/mp4" autoPlay muted>
                </video>
            </div>
            <div className={classes.container}>
            <Navbar1 shownav2={shownav2}/>
            <div className={classes.qoutes}>
            <h1>Light’s Artistic</h1>
            <h1>Transformation</h1>
            <div className={classes.q2}>
            <h3>Light, the silent artist, transforms our world with its gentle touch.</h3>
            <h3>From dawn to sunset,its presence paints our emotions anew.</h3>
            </div>
            </div>
            </div>
            <div className={classes.lightqoute}>
                <div className={classes.lightqoutecontainer}>
                    <h1>Light affects the way</h1>
                    <h1>people experience space</h1>
                    <p>Powerful, high-element lighting design can transform surfaces, forms, textures </p>
                    <p>and colors. Since its inception in Dubai, UAE in 2005, LET Design Lighting .</p>
                    <p>Consultants has accumulated vast experience in the many uses of light that alter </p>
                    <p >perceptions and evoke appropriate responses for any project fathomable</p>
                </div>

            </div>
            <div className={classes.methodology}>
                <div className={classes.methodologycontainer}>
                    <div className={classes.methodologycontainerleft}>
                        <h1>Our Methodology</h1>
                        <Link to='/#'>Explore</Link>
                    </div>
                    <div className={classes.methodologycontainerright}>
                        <p>Our continued success in delivering some of </p>
                        <p>the most renowned lighting solutions across </p>
                        <p>the globe stems from our refined process that </p>
                        <p>involves the following key factors.</p>
                    </div>
                </div>
                <CardsScroll/>
                <OurProjects/>
                <OurServices/>
            </div>
            
        </>
    );
}

export default Home;
