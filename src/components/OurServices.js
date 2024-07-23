import classes from '../styles/ouservices.module.css';
import img from '../assets/ourServices/design-conceptualization.jpg';
import { Link } from 'react-router-dom';
const OurServices =()=>{
    return(
        <div className={classes.ourservices}>
            <div className={classes.container}>
                <h1>Our Services</h1>
                <div className={classes.container_box}>
                    <img src={img} alt='map'/>
                    <div className={classes.content}>
                        <ul>
                            <li>Design Conceptualization</li>
                            <li>Design Development</li>
                            <li>Construction Documentation</li>
                            <li>Construction Administration</li>
                        </ul>
                        <Link className={classes.link}>Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;