import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import classes from './css/ArticleHeader.module.css';

const ArticleHeader = (props) => {

  const date = new Date(props.date);

  const month = date.toLocaleString('en-US',{month: "long"});
  const day = date.toLocaleString('en-US', { day: '2-digit'});
  const year = date.getFullYear();

  let categories;
  if(props.category){
    categories = props.category.map((category,index, length) => {
      return (<span key={index}><Link to={"/category/"+category.toLowerCase()} key={index}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>&nbsp;  &nbsp;   </span>);
    });
    
  }

  return (
    <div className={classes.articleHeader}>
      <div className={classes.navigation}><h4>{categories}</h4></div>
      <div className={classes.title}><h1>{props.title}</h1></div>
      <div className={classes.headercontent}><span><h5>{`Author: ${props.author}`}</h5></span><span><h5>{props.duration} min read</h5></span><span><h5>{day} {month} {year}</h5></span></div>
      <div className={classes.imageWithCaption}>
        <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt}/></div>
        <div className={classes.imageCaption}><ReactMarkdown>{props.imageCaption}</ReactMarkdown></div>
      </div>
    </div>
  );
};

export default ArticleHeader;