import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/ArticlePage.module.css';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

import ArticleHeader from '../../articlecontent/ArticleHeader';
import ArticleBody from '../../articlecontent/ArticleBody';
import callAxios from '../../../util/callAxios';

const ArticlePage = () => {
  const [post, setPost] = useState([{title:"",content:"",date:""}]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await callAxios("posts/"+params.idTitle);
      setPost(res.data);
      setIsLoading(false);
    }
    fetchPost();
  },[params.idTitle]);

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
        <ArticleHeader title = {post[0].title} date={post[0].createdAt} author={post[0].author} category={post[0].category} type={post[0].type} coverImage={post[0].coverImage} duration = {post[0].duration} imageCaption = {post[0].imageCaption} imageAlt={post[0].imageAlt}/>
        <ArticleBody content = {post[0].content}/>
      </div>
    );
  }


};

export default ArticlePage;