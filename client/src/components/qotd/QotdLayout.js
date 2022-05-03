import classes from './css/QotdLayout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";


const QotdLayout = () => {
    return (
        <div className={classes.qotdLayoutWrapper}>
            <div className={classes.line}></div>
            <div className={classes.design}>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
            </div>
            <div className={classes.line}/>
        </div>
    );
};

export default QotdLayout;