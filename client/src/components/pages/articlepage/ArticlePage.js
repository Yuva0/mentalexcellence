import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/ArticlePage.module.css';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

import ArticleHeader from '../../articlecontent/ArticleHeader';
import ArticleBody from '../../articlecontent/ArticleBody';
import getAxiosRequest from '../../../util/getAxiosRequest';
import LikeButton from '../../ui/likeButton/LikeButton';

const ArticlePage = (props) => {
  const [post, setPost] = useState([{title:"",content:"",date:""}]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getAxiosRequest(props.type+"/"+params.idTitle);
      setPost(res.data);
      setIsLoading(false);
      
    }
    fetchPost();
  },[params.idTitle,props.type]);

  if(isLoading){
    return (
      <div className={classes.articlepage}>
        <ReactSpinner/>
        </div>
    );
  }
  else{
    return (
      <div className={classes.articlepage}>
        <ArticleHeader title = {post[0].title} date={post[0].createdAt} author={post[0].author} category={post[0].category} coverImage={post[0].coverImage} duration = {post[0].duration} imageCaption = {post[0].imageCaption} imageAlt={post[0].imageAlt}/>
        <ArticleBody content = {post[0].content}/>
        <div className={classes.interactionEvents}>
          <div className={classes.interactionEventsTitle}><h4>Loved it? Show it!</h4></div>
          <div className={classes.interactionEventsContent}>
            <span className={classes.likeButton}><LikeButton contentType={props.type} likes_count = {post[0].likes_count} _id={post[0]._id}/></span>
          </div>
        </div>
        
      </div>
    );
  }


};

export default ArticlePage;