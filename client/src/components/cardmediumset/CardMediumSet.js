import { useState,useEffect } from 'react';
import classes from './css/CardMediumSet.module.css'
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import CardMediumSetItem from './CardMediumSetItem';
import callAxios from '../../util/callAxios';

const CardMediumSet = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchCards = async () => {
            if(props.category){
                const res = await callAxios("card/?category="+props.category+"&limit=6");
                setCards(res.data);
            }
        }
        if(isMounted)
            fetchCards();

        return () => { isMounted = false };
    },[props.category]);

    let content;
    if (cards.length === 0){
        content = <p>No Cards found</p>
    }
    else{
        content = cards.map((card) => <li key={card.key}><CardMediumSetItem key={card.key} name={card.name} image={card.coverImage} alt={card.imageAlt}/></li>);
    }

    return (
        <div className={classes.cardMediumSetWrapper}> 
            <LineDiamondLine/>
            <div className={classes.cardMediumSetTitle}><h4>{props.title}</h4></div>
            <ul className={classes.cardMediumSetItemWrapper}>
                {content}
            </ul>
            <LineDiamondLine/>
        </div>
    );
};

export default CardMediumSet;