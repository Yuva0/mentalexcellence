import { Link } from 'react-router-dom';

import classes from './css/ArticleHeader.module.css';

const ArticleHeader = (props) => {

  const date = new Date(props.date);

  const month = date.toLocaleString('en-US',{month: "long"});
  const day = date.toLocaleString('en-US', { day: '2-digit'});
  const year = date.getFullYear();

  let theme,link;
  if(props.type === "article"){
    theme = props.category.charAt(0).toUpperCase() + props.category.slice(1);
    link = "category/"+props.category.toLowerCase();
  }
  else if(props.type === "bookreview"){
    theme = "Book Review"
    link = "book-review"
  }

  return (
    <div className={classes.articleHeader}>
      <div className={classes.navigation}><Link to={`/${link}`}><h4>{theme}</h4></Link></div>
      <div className={classes.title}><h1>{props.title}</h1></div>
      {/* <div className={classes.title}><h1>Why is it OKAY to be self-centered and focus on yourself in life?</h1></div> */}
      <div className={classes.headercontent}><span><h5>{`Author: ${props.author}`}</h5></span><span><h5>{props.duration} min read</h5></span><span><h5>{day} {month} {year}</h5></span></div>
      <div className={classes.imageWithCaption}>
        <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt}/></div>
        <div className={classes.imageCaption}>{props.imageCaption}</div>
      </div>
    </div>
  );
};

export default ArticleHeader;