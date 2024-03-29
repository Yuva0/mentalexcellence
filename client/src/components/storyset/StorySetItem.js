import classes from './css/StorySetItem.module.css';

import { Link } from 'react-router-dom';

const StorySetItem = (props) => {
  // const date = new Date(props.date);
  // const month = date.toLocaleString('en-US', { month: "long" });
  // const day = date.toLocaleString('en-US', { day: '2-digit' });
  // const year = date.getFullYear();

  let category;
  if (props.category) {
    let categoryInner="";
    for(let i=0;i<props.category.length-1;i++){
      categoryInner = categoryInner + props.category[i].charAt(0).toUpperCase() + props.category[i].slice(1) + ", ";
    }
    let categoryVal = categoryInner+props.category[props.category.length-1].charAt(0).toUpperCase() + props.category[props.category.length-1].slice(1);
    category = <div className={classes.category}><h6>{categoryVal}</h6></div>
    // category = <div className={classes.category}><h5>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h5></div>;
  }

  // let ribbon;
  let duration;
  if (props.durationType === 3){
    // ribbon = <span className={classes.ribbon}><h5>Detailed</h5></span>
    duration = <div className={classes.durationGold}><h6>{props.duration} min read </h6></div>
  }
  else{
    duration = <div className={classes.duration}><h6>{props.duration} min read </h6></div>
  }

  return (
    <div className={classes.mediumSetWrapper}>
      <Link to={{ pathname: `/story/${props.idTitle}`, query: { title: props.title } } }>
     
      <div className={classes.content}>
        <div className={classes.title}><h5>{props.title}</h5></div>
        {/* <div className={classes.date}><h5>{day} {month} {year}</h5></div> */}
        {category}
        {/* <div className={classes.description}><h4>{props.description}</h4></div> */}
        {duration}
      </div>
      <div className={classes.image}>
        <img src={props.coverImage} alt={props.imageAlt} />
        {/* {ribbon} */}
      </div>
      </Link>
    </div>
  );
};

export default StorySetItem;