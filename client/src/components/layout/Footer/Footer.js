import classes from './css/Footer.module.css';
// import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.titleHeader}><h2>The Key To Excellence is Everyday Improvement</h2></div>
                <div className={classes.subTitleHeader}><h3>So keep coming back everyday to improve your mental skills!</h3></div>
                {/* <div className={classes.logoIcon}><img src={logo}/></div> */}
                {/* <div className={classes.hr}/> */}
                <div className={classes.footerMenuComplete}>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Content</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><Link to={{pathname: "/articles"}}><h5>Articles</h5></Link></li>
                            <li><Link to={{pathname: "/stories"}}><h5>Stories</h5></Link></li>
                            <li><Link to={{pathname: "/cards"}}><h5>Cards</h5></Link></li>
                        </ul>
                    </div>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Categories</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><Link to={{pathname: "/category/awareness"}}><h5>Awareness</h5></Link></li>
                            <li><Link to={{pathname: "/category/thoughts"}}><h5>Thoughts</h5></Link></li>
                            <li><Link to={{pathname: "/category/emotions"}}><h5>Emotions</h5></Link></li>
                            <li><Link to={{pathname: "/category/mindset"}}><h5>Mindset</h5></Link></li>
                            <li><Link to={{pathname: "/category/philosophy"}}><h5>Philosophy</h5></Link></li>
                            <li><Link to={{pathname: "/category/psychology"}}><h5>Psychology</h5></Link></li>
                            <li><Link to={{pathname: "/category/productivity"}}><h5>Productivity</h5></Link></li>
                        </ul>
                    </div>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Policies</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/0a5b51a8-e89f-46ab-b04b-57fae01484bf"><h5>Privacy Policy</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/3c34addb-5a7d-4edd-8014-133e7c4c24bf"><h5>Terms &amp; Conditions</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/8012f3b7-c660-46d6-b1b5-cfc3cfe747ca"><h5>Cookies Policy</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/e9550bd4-e212-44e9-8bbc-c0ba61586045"><h5>Disclaimer</h5></a></li>
                        </ul>
                    </div>
                    <div className={`${classes.footerMenu} ${classes.lastFooterMenu}`}>
                        <div className={classes.footerMenuHeader}><h5>Follow Us</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/mentalexcellence.in/"><h4><FontAwesomeIcon icon={faInstagram}/></h4></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/mentalexcellence.in/"><h4><FontAwesomeIcon icon={faFacebook}/></h4></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/mentalexcellence.in/"><h4><FontAwesomeIcon icon={faYoutube}/></h4></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/mentalexcellence.in/"><h4><FontAwesomeIcon icon={faTwitter}/></h4></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;