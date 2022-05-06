import classes from './css/CardMediumSetItem.module.css';


const CardMediumSetItem = (props) => {
    let status;
    if(props.status === "new"){
        status = <div className={classes.newCard}>NEW!</div>;
    }

    return (
        <div className={classes.cardMediumSetItemWrapper}>
            {status}
            <img src={props.image} alt={props.alt}/>
            <div className={classes.cardDescription}>{props.name}</div>
        </div>
    );
};

export default CardMediumSetItem;