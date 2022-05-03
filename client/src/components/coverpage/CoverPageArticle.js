import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonandSymbol from '../ui/ButtonandSymbol';
import classes from './css/CoverPageArticle.module.css';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CoverPageArticle = (props) => {
  return (
    <div className={classes.coverPageArticle}>
      <div className={classes.title}><h1>{props.title}</h1></div>
      <div className={classes.description}><ReactMarkdown>{props.description}</ReactMarkdown></div>
      <div className={classes.button}><ButtonandSymbol style={{ backgroundColor: "#FFBE52" }} icon={faChevronRight} link={`/article/${props.idTitle}`}>Read More</ButtonandSymbol></div>
    </div>
  );
};

export default CoverPageArticle;