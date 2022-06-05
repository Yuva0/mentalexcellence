import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './css/AllSet.module.css';
import AllSetItem from './AllSetItem';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const AllSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});

  useEffect(() => {
    const fetchPosts = async () => {
      // AllISet has all Items
      if (props.time === "latest") {
        if(props.category){
          const res = await axios.get("http://localhost:5000/api/articles/?category="+props.category+"&coverpage=false");
          // const res = await axiosInstance.get("posts/?category="+props.category);
          setPosts(res.data);
        }
        else if(props.type === "article"){
          const res = await axios.get("http://localhost:5000/api/articles/?coverpage=false");
          // const res = await axiosInstance.get("posts/");
          setPosts(res.data);
        }
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [props.time, props.type, props.category]);

  let content;

  if (posts.length === 0) {
    content = <p>No Posts found</p>
  }
  else {
    content = posts.map((post) =>
      <AllSetItem key={post._id} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.createdAt}
      category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} duration={post.duration}/>
    );
  }


  if(isLoading === true){
    return (<div>
      <ReactSpinner/>
    </div>
    );
  }
  else {
    return (
        <div>
        <div className={`${classes.allSetTitle} title`}><h3>{props.title}</h3></div>
        <div className={classes.allSetCollection}>
          {content}
        </div>
      </div>
    );
  }
}

export default AllSet;