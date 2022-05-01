import {Link, NavLink} from 'react-router-dom';
import classes from './css/Header.module.css';
import logo from '../../../assets/images/logo.png';
import name from '../../../assets/images/name.png';
import SettingsButton from './Settings/SettingsButton';
import NavigationButton from './Navigation/NavigationButton';
import CategoryButton from './Category/CategoryButton';


const Header = (props) => {
  return (
    <div id="header" className={classes.header}>
      <div className={classes.headerItems}>
        <ul className={classes.leftItems}>
          <li className={classes.itemImage}><Link to="/"><img src={logo} alt="logo" /></Link></li>
          <li className={`${classes.itemImage} ${classes.itemName}`}><Link to="/"><img src={name} alt="name" /></Link></li>
        </ul>
        <ul className={classes.rightItems}>
          <li><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : `${classes.menuItems}`)} exact="true" to="/"><h4>Home</h4></NavLink></li>
          <li className={classes.menuItems}><CategoryButton/></li>
          {/* <li><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : `${classes.menuItems}`)} exact="true" to="/book-review"><h4>Book Review</h4></NavLink></li> */}
          <li className={classes.navigationButton}><NavigationButton/></li>
          <li><SettingsButton/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
