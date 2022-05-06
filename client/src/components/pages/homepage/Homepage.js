import classes from './css/Homepage.module.css';
import CoverPage from '../../coverpage/CoverPage';
import MediumSet from '../../mediumset/MediumSet';
import Qotd from '../../qotd/Qotd';

const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
       <CoverPage />
       <MediumSet title="Latest Articles" time="latest" type="article"/>
      <Qotd/>
    </div>
  );
};

export default Homepage;