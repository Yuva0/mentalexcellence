import classes from './css/Footer.module.css';
import logoWhite from '../../../assets/images/logo_white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerTop}>
                {/* <div className={classes.footerLogo}><img src={logoWhite} alt="logo"/></div> */}
                <div className={classes.footerTopEveryday}><h2>The Key To Excellence is <u>Everyday Improvement</u></h2></div>
                <div className={classes.footerTopSkills}><h3>So keep coming back everyday to improve your mental skills!</h3></div>
            </div>
            {/* <div className={classes.footerBottom}>
                <div><Link to={{pathname: "/"}}><h4>Home</h4></Link></div>
                <div><h4>Archive</h4></div>
                <div><Link to={{pathname: "/category/awareness"}}><h4>Awareness</h4></Link></div>
                <div><Link to={{pathname: "/category/thoughts"}}><h4>Thoughts</h4></Link></div>
                <div><Link to={{pathname: "/category/emotions"}}><h4>Emotions</h4></Link></div>
                <div><Link to={{pathname: "/category/mindset"}}><h4>Mindset</h4></Link></div>
                <div><Link to={{pathname: "/category/philosophy"}}><h4>Philosophy</h4></Link></div>
                <div><Link to={{pathname: "/category/psychology"}}><h4>Psychology</h4></Link></div>
                <div><Link to={{pathname: "/category/productivity"}}><h4>Productivity</h4></Link></div>
            </div> */}
            <div className={classes.footerLinks}>
                <div className={classes.footerLinksDiv}>
                    <h4 className={classes.footerLinksDivTitle}>Content</h4>
                    <ul  className={classes.footerLinksDivList}>
                        <li><Link to={{pathname: "/articles"}}><h5>Articles</h5></Link></li>
                        <li><Link to={{pathname: "/stories"}}><h5>Stories</h5></Link></li>
                        <li><Link to={{pathname: "/cards"}}><h5>Cards</h5></Link></li>
                    </ul>
                </div>
                <div className={classes.footerLinksDiv}>
                    <h4 className={classes.footerLinksDivTitle}>Categories</h4>
                    <ul className={`${classes.footerLinksDivList} ${classes.footerLinksCategoryList}`}>
                        <li><Link to={{pathname: "/category/awareness"}}><h5>Awareness</h5></Link></li>
                        <li><Link to={{pathname: "/category/thoughts"}}><h5>Thoughts</h5></Link></li>
                        <li><Link to={{pathname: "/category/emotions"}}><h5>Emotions</h5></Link></li>
                        <li><Link to={{pathname: "/category/mindset"}}><h5>Mindset</h5></Link></li>
                        <li><Link to={{pathname: "/category/philosophy"}}><h5>Philosophy</h5></Link></li>
                        <li><Link to={{pathname: "/category/psychology"}}><h5>Psychology</h5></Link></li>
                        <li><Link to={{pathname: "/category/productivity"}}><h5>Productivity</h5></Link></li>
                    </ul>
                </div>
                <div className={classes.footerLinksDiv}>
                    <h4 className={classes.footerLinksDivTitle}>Company</h4>
                    <ul className={classes.footerLinksDivList}>
                        <li><a target="_blank" href="https://www.privacypolicies.com/live/0a5b51a8-e89f-46ab-b04b-57fae01484bf"><h5>Privacy Policy</h5></a></li>
                        <li><a target="_blank" href="https://www.privacypolicies.com/live/3c34addb-5a7d-4edd-8014-133e7c4c24bf"><h5>Terms &#38; Conditions</h5></a></li>
                        <li><a target="_blank" href="https://www.privacypolicies.com/live/8012f3b7-c660-46d6-b1b5-cfc3cfe747ca"><h5>Cookies Policy</h5></a></li>
                        <li><a target="_blank" href="https://www.privacypolicies.com/live/e9550bd4-e212-44e9-8bbc-c0ba61586045"><h5>Disclaimer</h5></a></li>
                    </ul>
                </div>
                <div className={classes.footerLinksDiv}>
                    <h4 className={classes.footerLinksDivTitle}>Follow Us</h4>
                    <ul className={classes.footerLinksDivList}>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;