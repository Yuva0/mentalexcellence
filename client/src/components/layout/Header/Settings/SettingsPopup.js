import React, { useState } from 'react';

import classes from './css/SettingsPopup.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const SettingsPopup = (props, ref) => {

  const [theme, setTheme] = useState(0);
  const [align, setAlign] = useState(0);

  const setWhiteThemeHandler = () => {
    if(theme === 0)
      return;
    setTheme(0);
    document.querySelector(':root').style.setProperty('--backgroundColorTheme','white');
    document.querySelector(':root').style.setProperty('--colorTheme',"black");

  };

  const setOchreThemeHandler = () => {
    if(theme === 1)
      return;
    setTheme(1);
    document.querySelector(':root').style.setProperty('--backgroundColorTheme','#FFFBDD');
    document.querySelector(':root').style.setProperty('--colorTheme',"black");
  };

  const setBlackThemeHandler = () => {
    if(theme === 2)
      return;
    setTheme(2);
    document.querySelector(':root').style.setProperty('--backgroundColorTheme','#202124');
    document.querySelector(':root').style.setProperty('--colorTheme','white');

  };

  const setLeftAlignHandler = () => {
    if(align === 0)
      return;
    setAlign(0);
    document.querySelector(':root').style.setProperty('--textAlign','left');
  };

  const setJustifyAlignHandler = () => {
    if(align === 1)
      return;
    setAlign(1);
    document.querySelector(':root').style.setProperty('--textAlign','justify');
  };

  const setCenterAlignHandler = () => {
    if(align === 2)
      return;
    setAlign(2);
    document.querySelector(':root').style.setProperty('--textAlign','center');
  };

  return (
    <div ref={ref} className={`${!props.display && classes.hidePopup} ${classes.popup}`}>
      <div className={classes.popupItem}>
        <div className={classes.popupItemTitle}><h4>Theme :</h4></div>
        <ul className={classes.popupItemVal}>
          <li className={`${classes.theme} ${classes.white}`}><button onClick={setWhiteThemeHandler} className={classes.themeButton}><FontAwesomeIcon className={`${!(theme === 0) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
          <li className={`${classes.theme} ${classes.ochre}`}><button onClick={setOchreThemeHandler} className={classes.themeButton}><FontAwesomeIcon className={`${!(theme === 1) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
          <li className={`${classes.theme} ${classes.black}`}><button onClick={setBlackThemeHandler} className={classes.themeButton}><FontAwesomeIcon style={{color: "white"}} className={`${!(theme === 2) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
        </ul>
      </div>
      <div className={classes.popupItem}>
        <div className={classes.popupItemTitle}><h4>Text-Align:</h4></div>
        <ul className={classes.popupItemVal}>
          <li className={`${classes.align} ${classes.left}`}><FontAwesomeIcon onClick={setLeftAlignHandler} className={`${classes.alignIcon} ${(align === 0) && classes.alignSelected}`} icon={faAlignLeft}/></li>
          <li className={`${classes.align} ${classes.justify}`}><FontAwesomeIcon onClick={setJustifyAlignHandler} className={`${classes.alignIcon} ${(align === 1) && classes.alignSelected}`} icon={faAlignJustify}/></li>
          <li className={`${classes.align} ${classes.right}`}><FontAwesomeIcon onClick={setCenterAlignHandler} className={`${classes.alignIcon} ${(align === 2) && classes.alignSelected}`} icon={faAlignCenter}/></li>
        </ul>
      </div>
    </div>
  );
};

const forwardSettings = React.forwardRef(SettingsPopup);

export default forwardSettings;