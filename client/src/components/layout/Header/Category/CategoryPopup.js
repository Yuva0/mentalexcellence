import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './css/CategoryPopup.module.css';

const CategoryPopup = (props, ref) => {
  return (
    <ul ref={ref} className={`${!props.toggleCategory && classes.hidePopup} ${classes.popup}`}>
    <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/awareness"><h4>Awareness</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/thoughts"><h4>Thoughts</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/emotions"><h4>Emotions</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/mindset"><h4>Mindset</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/philosophy"><h4>Philosophy</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/psychology"><h4>Psychology</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/productivity"><h4>Productivity</h4></NavLink></li>
    </ul>
  );
};

const forwardNavigation = React.forwardRef(CategoryPopup);

export default forwardNavigation;