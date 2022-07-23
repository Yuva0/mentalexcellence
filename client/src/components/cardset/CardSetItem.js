import { Fragment, useState } from 'react';
import CardModal from '../modals/CardModal';
import classes from './css/CardSetItem.module.css';


const CardMediumSetItem = (props) => {

    const [cardModalActive, setCardModalActive] = useState(false);

    const cardClickHandler = () => {
        setCardModalActive(() => true);
        document.getElementsByTagName("BODY")[0].classList.add("hideOverflow");
    }

    const closeModalHandler = () => {
        setCardModalActive(() => false);
        document.getElementsByTagName("BODY")[0].classList.remove("hideOverflow");
    }

    return (
        <Fragment>
            <div className={classes.cardSetItemWrapper} onClick={cardClickHandler}>
                <img src={props.image} alt={props.alt}/>
                <div className={classes.cardDescription}>{props.name}</div>
            </div>
            {cardModalActive && <CardModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
        </Fragment>
    );
};

export default CardMediumSetItem;