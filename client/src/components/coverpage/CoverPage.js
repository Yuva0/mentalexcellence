import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import classes from './css/CoverPage.module.css';
import crown from '../../assets/images/crown.png';
import awareness from '../../assets/images/awareness.png';
import thoughts from '../../assets/images/thoughts.png';
import emotions from '../../assets/images/emotions.png';
import mindset from '../../assets/images/mindset.png';
import philosophy from '../../assets/images/philosophy.png';
import psychology from '../../assets/images/psychology.png';
import productivity from '../../assets/images/productivity.png';
import callAxios from '../../util/callAxios';

import CoverPageArticle from './CoverPageArticle';

const CoverPage = (props) => {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageDiv,setIsImageDiv] = useState(<div></div>);

  useEffect(() => {
    const fetchPosts = async() => {
      if(!params.category){
        const res = await callAxios("articles/?idTitle=why-should-you-strive-to-pursue-mental-excellence");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={crown} alt="crown"/></div> );
      }
      else if(params.category === "awareness"){
        const res = await callAxios("articles/?category=awareness&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={awareness} alt="awareness"/></div> );
      }
      else if(params.category === "thoughts"){
        const res = await callAxios("articles/?category=thoughts&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={thoughts} alt="thoughts"/></div> );
      }
      else if(params.category === "emotions"){
        const res = await callAxios("articles/?category=emotions&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={emotions} alt="emotions"/></div> );
      }
      else if(params.category === "mindset"){
        const res = await callAxios("articles/?category=mindset&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={mindset} alt="mindset"/></div> );
      }
      else if(params.category === "psychology"){
        const res = await callAxios("articles/?category=psychology&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={psychology} alt="psychology"/></div> );
      }
      else if(params.category === "philosophy"){
        const res = await callAxios("articles/?category=philosophy&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={philosophy} alt="philosophy"/></div> );
      }
      else if(params.category === "productivity"){
        const res = await callAxios("articles/?category=productivity&coverpage=true");
        setPost(res.data);
        setIsImageDiv(<div className={classes.imageIcon}><img src={productivity} alt="productivity"/></div> );
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [params.category]);

  if(isLoading){
    return (<div>
      <ReactSpinner/>
    </div>
    );
  }
  else if (post.length === 0){
    return (<div></div>);
  }
  else{
    return (
      <div className={classes.coverpage}>
      {imageDiv}
      <CoverPageArticle title={post[0].title} description={post[0].description} idTitle={post[0].idTitle}/>
    </div>);
  }

};

export default CoverPage;