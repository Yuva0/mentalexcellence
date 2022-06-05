import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

import classes from './css/CategoryPage.module.css';

import ArticleSet from '../../articleset/ArticleSet.js';
import CoverPage from '../../coverpage/CoverPage';
import CardSet from '../../cardset/CardSet';

const CategoryPage = () => {
  const params = useParams();
  const [content,setContent] = useState();

  useEffect(() => {
      if(params.category === "awareness"){
        setContent(<CardSet category="awareness" title="Best Ways to Improve Your Awareness!"/>);
      }
      else if(params.category === "mindset"){
        setContent(<CardSet category="mindset" title="Best Mindsets to Implement!"/>);
      }
      else if(params.category === "thoughts"){
        setContent(<CardSet category="thoughts" title="Best Ways to improve your Thinking!"/>);
      }
      else if(params.category === "emotions"){
        setContent(<CardSet category="emotions" title="How to become more Emotionally Strong!"/>);
      }
      else if(params.category === "philosophy"){
        setContent(<CardSet category="philosopher" title="Greatest Philosophers of All Time!"/>);
      }
      else if(params.category === "psychology"){
        setContent(<CardSet category="psychologist" title="Greatest Psychologists of All Time!"/>);
      }
      else if(params.category === "productivity"){
        setContent(<CardSet category="productivity" title="Best Ways To Boost Productivity!"/>);
      }
      return () => { 
        setContent(); 
      };
  },[params.category])

  return (
    <div className={classes.categorypage}>
      <CoverPage/>
      <ArticleSet title="Latest Articles" time="latest" type="article" limit="3"/>
      {content}
    </div>
  );
};

export default CategoryPage;