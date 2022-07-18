import { Link } from 'react-router-dom';
import fetchDate from '../../util/fetchDate';
import firstLetterUpper from '../../util/firstLetterUpper';
import classes from './css/ArticleSetItem.module.css';


const ArticleSetItem = (props) => {
  const [day,month,year] = fetchDate(props.date);

  let category;
  if (props.category) {
    let categoryInner="";
    for(let i=0;i<props.category.length-1;i++){
      categoryInner = categoryInner + firstLetterUpper(props.category[i]) + ", ";
    }
    let categoryVal = categoryInner+firstLetterUpper(props.category[props.category.length-1]);
    category = <div className={classes.category}><h6>{categoryVal}</h6></div>
  }

  let ribbon;
  let duration;
  if (props.durationType === 3){
    ribbon = <span className={classes.ribbon}><h6>Detailed</h6></span>
    duration = <div className={classes.durationGold}><h6>{props.duration} min read </h6></div>
  }
  else{
    duration = <div className={classes.duration}><h6>{props.duration} min read </h6></div>
  }

  return (
    <div className={classes.articleSetItemWrapper}>
      <Link to={{ pathname: `/article/${props.idTitle}`, query: { title: props.title } }}>
      <div className={classes.image}>
        <img src={props.coverImage} alt={props.imageAlt} />
        {ribbon}
      </div>
      <div className={classes.content}>
        <div className={classes.title}><h3>{props.title}</h3></div>
        <div className={classes.date}><h6>{day} {month} {year}</h6></div>
        {category}
        <div className={classes.description}><h5>{props.description}</h5></div>
        {duration}
      </div>
      </Link>
    </div>
  );
};

export default ArticleSetItem;