import classes from './css/Qotd.module.css';
import QotdContent from './QotdContent';
import QotdLayout from './QotdLayout';
import callAxios from '../../util/callAxios';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { useState, useEffect } from 'react';

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
            <QotdLayout/>
            <QotdContent quote = {quote[0].quote} author = {quote[0].author}/> 
            <QotdLayout/>
        </div>
        );
    }
};

export default Qotd;