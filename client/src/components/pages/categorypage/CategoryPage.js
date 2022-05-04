import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

import classes from './css/CategoryPage.module.css';

// import MediumSet from '../../mediumset/MediumSet';
import AllSet from '../../allset/AllSet';
import CoverPage from '../../coverpage/CoverPage';
import CardMediumSet from '../../cardmediumset/CardMediumSet';

const CategoryPage = () => {
  const params = useParams();
  const [content,setContent] = useState();

  useEffect(() => {
      if(params.category === "philosophy"){
        setContent(<CardMediumSet category="philosopher" title="Greatest Philosophers of All Time!"/>);
      }
      else if(params.category === "mindset"){
        setContent(<CardMediumSet category="mindset" title="Best Mindsets to Implement!"/>);
      }
      return () => { 
        setContent(); 
      };
  },[params.category])

  return (
    <div className={classes.categorypage}>
      <CoverPage/>
      {/* <MediumSet title="Latest Articles" time="latest" type="article" category={params.category}/> */}
      <AllSet title="All Articles" time="latest" type="article" category={params.category}/>
      {content}
    </div>
  );
};

export default CategoryPage;