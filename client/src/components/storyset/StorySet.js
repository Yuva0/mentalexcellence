import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/StorySet.module.css';
import StorySetItem from './StorySetItem.js';
import callAxios from '../../util/callAxios';

const StorySet = (props) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      if (props.time === "latest" && props.type === "story") {
        let query="";
        if(params.category){
          query = query + "category=" + params.category +"&";
        }
        if(props.limit){
          query = query + "limit=" + props.limit +"&";
        }
        if(query){
          const res = await callAxios("stories/?"+ query +"coverpage=false");
          setPosts(res.data);
        }
        else{
          const res = await callAxios("stories/?coverpage=false");
          setPosts(res.data);
        }
        
      }
    }

    fetchPosts();
  }, [props.time, props.type, params.category, props.limit]);
  
  let content;

  if (posts.length === 0) {
    content = <p>No Stories found</p>
  }
  else {
    content = posts.map((post) =>
      <StorySetItem key={post._id} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.createdAt}
      category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} duration={post.duration} durationType={post.durationType}/>
    );
  }

  return (
    <div className={classes.storySetWrapper}>
      <div className={`${classes.storySetTitle} title`}><h3>{props.title}</h3></div>
      <div className={classes.storySetCollection}>
        {content}
      </div>
    </div>
  );
};

export default StorySet;