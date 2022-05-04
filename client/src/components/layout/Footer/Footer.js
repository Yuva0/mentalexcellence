import classes from './css/Footer.module.css';
import logoWhite from '../../../assets/images/logo_white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerTop}>
                <div className={classes.footerLogo}><img src={logoWhite} alt="logo"/></div>
                <div className={classes.footerTopEveryday}><h2>The Key To Excellence is <u>Everyday Improvement</u></h2></div>
                <div className={classes.footerTopSkills}><h3>So keep coming back everyday to improve your mental skills!</h3></div>
            </div>
            <div className={classes.footerBottom}>
                <div><Link to={{pathname: "/"}}><h4>Home</h4></Link></div>
                {/* <div><h4>Archive</h4></div> */}
                <div><Link to={{pathname: "/category/awareness"}}><h4>Awareness</h4></Link></div>
                <div><Link to={{pathname: "/category/thoughts"}}><h4>Thoughts</h4></Link></div>
                <div><Link to={{pathname: "/category/emotions"}}><h4>Emotions</h4></Link></div>
                <div><Link to={{pathname: "/category/mindset"}}><h4>Mindset</h4></Link></div>
                <div><Link to={{pathname: "/category/philosophy"}}><h4>Philosophy</h4></Link></div>
                <div><Link to={{pathname: "/category/psychology"}}><h4>Psychology</h4></Link></div>
                <div><Link to={{pathname: "/category/productivity"}}><h4>Productivity</h4></Link></div>
            </div>
        </div>
    );
};

export default Footer;