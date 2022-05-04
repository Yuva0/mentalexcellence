import classes from './css/CardMediumSetItem.module.css';


const CardMediumSetItem = (props) => {
    return (
        <div className={classes.cardMediumSetItemWrapper}>
            <img src={props.image} alt={props.alt   }/>
            <div  className={classes.cardDescription}>{props.name}</div>
        </div>
    );
};

export default CardMediumSetItem;