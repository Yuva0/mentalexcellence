import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './css/NavigationPopup.module.css';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const NavigationPopup = (props, ref) => {
  
  const [toggleCategoryList, setToggleCategoryList] = useState(false);

  const categoryListHandler = () => {
    setToggleCategoryList((prevToggleCategoryList) => (!prevToggleCategoryList));
  }

  const hideNavigation = () => {
    props.toggleNavigationHandler(false);
  }

  const hideNavigationHome = () => {
    setToggleCategoryList(() => false);
    props.toggleNavigationHandler(false);
  }

  return (
    <ul ref={ref} className={`${!props.toggleNavigation && classes.hidePopup} ${classes.popup}`}>
      <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/" onClick={hideNavigationHome}><h4>Home</h4></NavLink></li>
      <li className={`${classes.popupItem}`} onClick = {categoryListHandler}>
        <span className={classes.categoryItem}><h4>Category</h4>
        <FontAwesomeIcon icon={faSortDown}/>
        </span>
        <ul className={`${classes.categoryList} ${!toggleCategoryList && classes.hideCategoryList}`}>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/awareness" onClick={hideNavigation}><h4>Awareness</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/thoughts" onClick={hideNavigation}><h4>Thoughts</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/emotions" onClick={hideNavigation}><h4>Emotions</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/mindset" onClick={hideNavigation}><h4>Mindset</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/philosophy" onClick={hideNavigation}><h4>Philosophy</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/psychology" onClick={hideNavigation}><h4>Psychology</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/productivity" onClick={hideNavigation}><h4>Productivity</h4></NavLink></li>
        </ul>
      </li>
      {/* <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/book-review"><h3>Book Review</h3></NavLink></li> */}
    </ul>
  );
};

const forwardNavigation = React.forwardRef(NavigationPopup);

export default forwardNavigation;