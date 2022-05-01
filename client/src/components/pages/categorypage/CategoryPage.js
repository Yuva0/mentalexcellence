import { useParams } from 'react-router-dom';

import classes from './css/CategoryPage.module.css';

import MediumSet from '../../mediumset/MediumSet';
import AllSet from '../../allset/AllSet';

const CategoryPage = (props) => {
  const params = useParams();
  return (
    <div className={classes.categorypage}>
      {/* <MediumSet title="Latest Articles" time="latest" type="article" category={params.category}/> */}
      <AllSet title="All Articles" time="latest" type="article" category={params.category}/>
    </div>
  );
};

export default CategoryPage;