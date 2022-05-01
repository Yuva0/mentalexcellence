import classes from './css/ButtonandSymbol.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonandSymbol = (props) => {

  return (
    <button style={props.style} className={classes.button}>
      <span className={classes.text}><h3>{props.children}</h3></span>
      <span className={classes.faicon}><FontAwesomeIcon icon={props.icon}/></span>
    </button>
  );
};

export default ButtonandSymbol;