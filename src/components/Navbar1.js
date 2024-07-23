import { NavLink, useLocation } from 'react-router-dom';
import classes from '../styles/navbar1.module.css';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Methodology', path: '/methodology' },
  { label: 'Projects', path: '/projects' },
  { label: 'Team', path: '/team' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar1 = ({shownav2}) => {
    const loc=useLocation();
    const path=loc.pathname;
    console.log(path);
  return (
    <div className={shownav2?`${classes.nav} ${classes.newnav}`:`${classes.nav}`}>
      <img src={process.env.PUBLIC_URL + 'assets/home-logo.png'} alt='logo' />
      <div className={classes.navbtns}>
        {navigationItems.map((item, index) => (
          <NavLink
          key={index}
          to={item.path}
          className={path===item.path?classes.activebtn:classes.inactivebtn}
        >
          {item.label}
        </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar1;