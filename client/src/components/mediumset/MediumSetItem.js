import classes from './css/MediumSetItem.module.css';

import { Link } from 'react-router-dom';

const MediumSetItem = (props) => {

  const date = new Date(props.date);

  const month = date.toLocaleString('en-US', { month: "long" });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  let category;
  if (props.category) {
    category = <div className={classes.category}><h5>{props.category.charAt(0).toUpperCase() + props.category.slice(1)} Perfection</h5></div>;
  }

  let ribbon;
  let duration;
  if (props.isDetailed === true){
    ribbon = <span className={classes.ribbon}><h5>Detailed</h5></span>
    duration = <div className={classes.durationGold}><h5>{props.duration} min read </h5></div>
  }
  else{
    duration = <div className={classes.duration}><h5>{props.duration} min read </h5></div>
  }

  return (
    <div className={classes.mediumSetWrapper}>
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

export default MediumSetItem;