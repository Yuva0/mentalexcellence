import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

import classes from './css/CategoryPage.module.css';

// import AllSet from '../../allset/AllSet';
import MediumSet from '../../mediumset/MediumSet';
import CoverPage from '../../coverpage/CoverPage';
import CardMediumSet from '../../cardmediumset/CardMediumSet';

const CategoryPage = () => {
  const params = useParams();
  const [content,setContent] = useState();

  useEffect(() => {
      if(params.category === "awareness"){
        setContent(<CardMediumSet category="awareness" title="Best Ways to Improve Your Awareness!"/>);
      }
      else if(params.category === "mindset"){
        setContent(<CardMediumSet category="mindset" title="Best Mindsets to Implement!"/>);
      }
      else if(params.category === "thoughts"){
        setContent(<CardMediumSet category="thoughts" title="Best Ways to improve your Thinking!"/>);
      }
      else if(params.category === "emotions"){
        setContent(<CardMediumSet category="emotions" title="How to become more Emotionally Strong!"/>);
      }
      else if(params.category === "philosophy"){
        setContent(<CardMediumSet category="philosopher" title="Greatest Philosophers of All Time!"/>);
      }
      else if(params.category === "psychology"){
        setContent(<CardMediumSet category="psychologist" title="Greatest Psychologists of All Time!"/>);
      }
      else if(params.category === "productivity"){
        setContent(<CardMediumSet category="productivity" title="Best Ways To Boost Productivity!"/>);
      }
      return () => { 
        setContent(); 
      };
  },[params.category])

  return (
    <div className={classes.categorypage}>
      <CoverPage/>
      {/* <MediumSet title="Latest Articles" time="latest" type="article" category={params.category}/> */}
      <MediumSet title="Latest Articles" time="latest" type="article"/>
      {content}
    </div>
  );
};

export default CategoryPage;