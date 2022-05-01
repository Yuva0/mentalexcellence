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

  return (
    <ul ref={ref} className={`${!props.toggleNavigation && classes.hidePopup} ${classes.popup}`}>
      <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/"><h4>Home</h4></NavLink></li>
      <li className={`${classes.popupItem}`} onClick = {categoryListHandler}>
        <span className={classes.categoryItem}><h4>Category</h4>
        <FontAwesomeIcon icon={faSortDown}/>
        </span>
        <ul className={`${classes.categoryList} ${!toggleCategoryList && classes.hideCategoryList}`}>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/awareness"><h4>Awareness</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/thoughts"><h4>Thoughts</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/emotions"><h4>Emotions</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/mindset"><h4>Mindset</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/philosophy"><h4>Philosophy</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/psychology"><h4>Psychology</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/productivity"><h4>Productivity</h4></NavLink></li>
        </ul>
      </li>
      {/* <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/book-review"><h3>Book Review</h3></NavLink></li> */}
    </ul>
  );
};

const forwardNavigation = React.forwardRef(NavigationPopup);

export default forwardNavigation;