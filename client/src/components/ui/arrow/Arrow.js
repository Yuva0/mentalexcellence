import classes from './css/Arrow.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from 'react';


const Arrow = () => {
    return (
        <Fragment>
            <FontAwesomeIcon className={classes.arrow} icon={faArrowRightLong}/>
        </Fragment>
    );
};

export default Arrow;