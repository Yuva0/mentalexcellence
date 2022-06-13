// import { useEffect, useState } from 'react';
import classes from './css/Homepage.module.css';
import CoverPage from '../../coverpage/CoverPage';
import ArticleSet from '../../articleset/ArticleSet';
import StorySet from '../../storyset/StorySet';
import Qotd from '../../qotd/Qotd';
// import CardSet from '../../cardset/CardSet';

const Homepage = (props) => {
  // Calculate window width - Do not use hooks!
  let storySet = <StorySet title="Latest Stories" time="latest" type="story" limit="8"/>
  if(window.innerWidth < 400){
    storySet = <StorySet title="Latest Stories" time="latest" type="story" limit="4"/>
  }

  return (
    <div className={classes.homepage}>
       <CoverPage />
       <Qotd/>
       <ArticleSet title="Latest Articles" time="latest" type="article" limit="3"/>
       {storySet}
       {/* <CardSet title="Latest Cards!" limit="6" time="latest" type="card"/> */}
    </div>
  );
};

export default Homepage;