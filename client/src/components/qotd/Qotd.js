import classes from './css/Qotd.module.css';
import QotdContent from './QotdContent';
import callAxios from '../../util/callAxios';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { useState, useEffect } from 'react';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';

const Qotd = () => {
    const [quote, setQuote] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true
        const fetchQuote = async() => {
            const res = await callAxios("qotd/");
            setQuote(res.data);
            setIsLoading(false);
        }
        if(isMounted){ 
            fetchQuote();
        }

        return () => { isMounted = false };
    }, []);

    if(isLoading){
        return (<div>
            <ReactSpinner/>
          </div>
        );
    }
    else if(quote.length === 0){
        return (<div></div>);
    }
    else{
        return (
            <div className={classes.qotdWrapper}> 
            <LineDiamondLine/>
            <QotdContent quote = {quote[0].quote} author = {quote[0].author}/> 
            <LineDiamondLine/>
            </div>
        );
    }
};

export default Qotd;