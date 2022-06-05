import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/ArticleSet.module.css';
import ArticleSetItem from './ArticleSetItem.js';
import callAxios from '../../util/callAxios';

const ArticleSet = (props) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      if (props.time === "latest" && props.type === "article") {
        let query="";
        if(params.category){
          query = query + "category=" + params.category +"&";
        }
        if(props.limit){
          query = query + "limit=" + props.limit +"&";
        }
        if(query){
          const res = await callAxios("articles/?"+ query +"coverpage=false");
          setPosts(res.data);
        }
        else{
          const res = await callAxios("articles/?coverpage=false");
          setPosts(res.data);
        }
        
      }
    }

    fetchPosts();
  }, [props.time, props.type, params.category, props.limit]);
  
  let content;

  if (posts.length === 0) {
    content = <p>No Posts found</p>
  }
  else {
    content = posts.map((post) =>
      <ArticleSetItem key={post._id} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.createdAt}
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

export default ArticleSet;