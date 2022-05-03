import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './css/MediumSet.module.css';
import MediumSetItem from './MediumSetItem';
import callAxios from '../../util/callAxios';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const MediumSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});

  useEffect(() => {
    const fetchPosts = async () => {
      // MediumSet has 3 Items
      if (props.time === "latest") {
        if(props.category){
          const res = await axios.get("http://localhost:5000/api/posts/?category="+props.category+"&limit=3&type=article");
          // const res = await axiosInstance.get("posts/?category="+props.category);
          setPosts(res.data);
        }
        else if(props.type === "article"){
          const res = await axios.get("http://localhost:5000/api/posts/?type=article&limit=3");
          // const res = await axiosInstance.get("posts/");
          setPosts(res.data);
        }
        else{
          const res =await callAxios("posts/?limit=3");
          setPosts(res.data);
        }
      }
      else if(props.type === "detailed"){
        const res =await callAxios("posts/?isDetailed=true&limit=3");
        setPosts(res.data);
      }
      else{
        const res =await callAxios("posts/?category="+props.type+"&limit=3");
        setPosts(res.data);
      }
    }

    fetchPosts();
  }, [props.time, props.type, props.category]);
  
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