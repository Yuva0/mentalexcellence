import ButtonandSymbol from '../ui/ButtonandSymbol';

import classes from './css/CoverPageArticle.module.css';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CoverPageArticle = () => {
  return(
    <div className={classes.coverPageArticle}>
      <div className={classes.title}><h1>Why you should strive to be the perfect version of yourself?</h1></div>
      <div className={classes.description}><h3>Any game that you play involves levelling up, getting better skills and as you get better, the challenges also get harder.
        As challenges get harder, you need to be more skilled to accomplish that challenge and once you accomplish it, you get better rewards. 
        <br/><br/>
        Life is such a game where as you improve your skills and accomplish harder challenges you get much better rewards. Since there are unlimited skills you can improve in life and not enough time, you need to find out which skills your perfect version should possess. 
        <br/><br/>
        We, at Plethopia provide articles to help you achieve the perfect version of yourself.
      </h3></div>
      <div className={classes.button}><ButtonandSymbol style={{backgroundColor: "#FFBE52"}} icon={faChevronRight}>Read More</ButtonandSymbol></div>
    </div>
  );
};

export default CoverPageArticle;