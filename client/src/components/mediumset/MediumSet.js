import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/MediumSet.module.css';
import MediumSetItem from './MediumSetItem';
import callAxios from '../../util/callAxios';

const MediumSet = (props) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      // MediumSet has 3 Items
      if (props.time === "latest" && props.type === "article") {
        if(params.category){
          const res = await callAxios("articles/?category="+params.category+"&limit=3&coverpage=false"  );
          setPosts(res.data);
        }
        else{
          const res =await callAxios("articles/?limit=3&coverpage=false");
          setPosts(res.data);
        }
      }
    }

    fetchPosts();
  }, [props.time, props.type, params.category]);
  
  let content;

  if (posts.length === 0) {
    content = <p>No Posts found</p>
  }
  else {
    content = posts.map((post) =>
      <MediumSetItem key={post._id} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.createdAt}
      category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} duration={post.duration}/>
    );
  }

  return (
    <div className={classes.mediumSetWrapper}>
      <div className={`${classes.mediumSetTitle} title`}><h3>{props.title}</h3></div>
      <div className={classes.mediumSetCollection}>
        {content}
      </div>
    </div>
  );
};

export default MediumSet;