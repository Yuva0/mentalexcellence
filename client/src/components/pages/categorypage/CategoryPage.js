import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

import classes from './css/CategoryPage.module.css';

import ArticleSet from '../../articleset/ArticleSet.js';
import CoverPage from '../../coverpage/CoverPage';
import CardSet from '../../cardset/CardSet';
import StorySet from '../../storyset/StorySet';

const CategoryPage = () => {
  const params = useParams();
  const [content,setContent] = useState();

  useEffect(() => {
      if(params.category === "awareness"){
        setContent(<CardSet category="awareness" title="Best Ways to Improve Your Awareness!" limit="6" time="latest" type="card"/>);
      }
      else if(params.category === "mindset"){
        setContent(<CardSet category="mindset" title="Best Mindsets to Implement!" limit="6" time="latest" type="card"/>);
      }
      else if(params.category === "thoughts"){
        setContent(<CardSet category="thoughts" title="Best Ways to improve your Thinking!" limit="6"  time="latest" type="card"/>);
      }
      else if(params.category === "emotions"){
        setContent(<CardSet category="emotions" title="How to become more Emotionally Strong!" limit="6"  time="latest" type="card"/>);
      }
      else if(params.category === "philosophy"){
        setContent(<CardSet category="philosopher" title="Greatest Philosophers of All Time!" limit="6"  time="latest" type="card"/>);
      }
      else if(params.category === "psychology"){
        setContent(<CardSet category="psychologist" title="Greatest Psychologists of All Time!" limit="6"  time="latest" type="card"/>);
      }
      else if(params.category === "productivity"){
        setContent(<CardSet category="productivity" title="Best Ways To Boost Productivity!" limit="6" time="latest" type="card"/>);
      }
      return () => { 
        setContent(); 
      };
  },[params.category])

  return (
    <div className={classes.categorypage}>
      <CoverPage/>
      <ArticleSet title="Latest Articles" time="latest" type="article" limit="3"/>
      <StorySet title="Latest Stories" time="latest" type="story" limit="8"/>
      {content}
    </div>
  );
};

export default CategoryPage;