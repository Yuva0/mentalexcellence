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
    category = <div className={classes.category}><h5>{categoryVal}</h5></div>
  }

  let ribbon;
  let duration;
  if (props.durationType === 3){
    ribbon = <span className={classes.ribbon}><h5>Detailed</h5></span>
    duration = <div className={classes.durationGold}><h5>{props.duration} min read </h5></div>
  }
  else{
    duration = <div className={classes.duration}><h5>{props.duration} min read </h5></div>
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
        <div className={classes.date}><h5>{day} {month} {year}</h5></div>
        {category}
        <div className={classes.description}><h4>{props.description}</h4></div>
        {duration}
      </div>
      </Link>
    </div>
  );
};

export default ArticleSetItem;