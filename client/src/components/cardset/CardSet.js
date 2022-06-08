import { useState,useEffect } from 'react';
import classes from './css/CardSet.module.css'
import {Link} from 'react-router-dom';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import CardSetItem from './CardSetItem';
import callAxios from '../../util/callAxios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const CardSet = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchCards = async () => {
            if (props.time === "latest" && props.type === "card") {
                let query="";
                if(props.category){
                    query = query + "category=" + props.category +"&";
                }
                if(props.limit){
                    query = query + "limit=" + props.limit +"&";
                }
                if(query){
                    const res = await callAxios("cards/?"+ query +"coverpage=false");
                    setCards(res.data);
                }
                else{
                    const res = await callAxios("cards/?"+query+"coverpage=false");
                    setCards(res.data);
                }
            }
        }
        
        if(isMounted)
            fetchCards();

        return () => { isMounted = false };
    },[props.category,props.limit,props.time,props.type]);

    let content;
    if (cards.length === 0){
        content = <p>No Cards found</p>
    }
    else{
        content = cards.map((card) => <CardSetItem key={card.key} name={card.name} image={card.coverImage} alt={card.imageAlt} status={card.status}/>);
    }

    return (
        <div className={classes.cardMediumSetWrapper}> 
            <LineDiamondLine/>
            <div className={classes.cardMediumSetTitle}><h4><Link to={"/cards"}>{props.title} <FontAwesomeIcon className={classes.rightIcon} icon={faArrowRightLong}/></Link></h4></div>
            <div className={classes.cardMediumSetItemWrapper}>
                {content}
            </div>
            <LineDiamondLine/>
        </div>
    );
};

export default CardSet;