import classes from './css/QotdContent.module.css';
 

const QotdContent = (props) => {
    return (
        <div className={classes.qotdContentWrapper}> 
            <div className={classes.qotdContentTitle}><h4>Quote Of The Day</h4></div>
            <div className={classes.qotdContentBody}><h2><i>“{props.quote}”</i></h2></div>
            <div className={classes.qotdContentAuthor}><h4>{props.author}</h4></div>
        </div>
    );
};

export default QotdContent;