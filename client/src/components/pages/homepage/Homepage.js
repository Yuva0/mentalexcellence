import classes from './css/Homepage.module.css';
import CoverPage from '../../coverpage/CoverPage';
import ArticleSet from '../../articleset/ArticleSet';
import Qotd from '../../qotd/Qotd';

const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
       <CoverPage />
       <ArticleSet title="Latest Articles" time="latest" type="article" limit="3"/>
      <Qotd/>
    </div>
  );
};

export default Homepage;