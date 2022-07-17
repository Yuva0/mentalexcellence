import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import CardSetItem from './CardSetItem';
import callAxios from '../../util/callAxios';
import ReactPaginate from "react-paginate";
import classes from './css/CardSet.module.css'

const PER_PAGE = 30;

const CardSet = (props) => {
    const [cards, setCards] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(0);

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

    let currentPageData,pageCount,reactPaginate;

    if (cards.length === 0){
        currentPageData = <p>No Cards found</p>
        reactPaginate = undefined;
    }
    else{
        pageCount = Math.ceil(cards.length / PER_PAGE);
        const offset = currentPage * PER_PAGE;
        currentPageData = cards.slice(offset, offset + PER_PAGE).map((card,index) => <CardSetItem key={index} name={card.name} image={card.coverImage} alt={card.imageAlt} status={card.status}/>);

        if(cards.length < PER_PAGE){
            reactPaginate = undefined;
        }
        else{
            reactPaginate = <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={pageCount} onPageChange={handlePageClick} containerClassName={classes.pagination} previousLinkClassName={classes.pagination__link}
            nextLinkClassName={classes.pagination__link} disabledClassName={classes.pagination__link__disabled} activeClassName={classes.pagination__link__active}/>
        }    
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
        window.scrollTo(0, 0);
    }

    return (
        <div className={classes.cardSetWrapper}> 
            <LineDiamondLine/>
            <div className={classes.cardSetTitle}><h4><Link to={"/cards"}><span className={classes.arrow}>{props.title}</span></Link></h4></div>
            <div className={classes.cardSetItemWrapper}>
                {currentPageData}
            </div>
            {reactPaginate}
            <LineDiamondLine/>
        </div>
    );
};

export default CardSet;