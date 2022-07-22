import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import classes from './css/StorySet.module.css';
import {Link} from 'react-router-dom';
import StorySetItem from './StorySetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import ReactPaginate from "react-paginate";

const PER_PAGE = 20;

const StorySet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
    
  const [currentPage, setCurrentPage] = useState(0);

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
          const res = await getAxiosRequest("stories/?"+ query +"coverpage=false");
          setPosts(res.data);
        }
        else{
          const res = await getAxiosRequest("stories/?coverpage=false");
          setPosts(res.data);
        }
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [props.time, props.type, params.category, props.limit]);
  
  let currentPageData,pageCount,reactPaginate;

  if(isLoading){
    return (<div>
      <ReactSpinner />
    </div>
    );
  }
  else if (posts.length === 0) {
    currentPageData = <p>No Stories found</p>
    reactPaginate = undefined;
  }
  else {
    pageCount = Math.ceil(posts.length / PER_PAGE);
    const offset = currentPage * PER_PAGE;
    currentPageData = posts.slice(offset, offset + PER_PAGE).map((post,index) => <StorySetItem key={post._id} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.createdAt}
      category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} duration={post.duration} durationType={post.durationType}/>
    );

    if(posts.length < PER_PAGE){
      reactPaginate = undefined;
    }
    else{
      reactPaginate = <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={pageCount} onPageChange={handlePageClick} containerClassName={classes.pagination} previousLinkClassName={classes.pagination__link}
      nextLinkClassName={classes.pagination__link} disabledClassName={classes.pagination__link__disabled} activeClassName={classes.pagination__link__active}/>
    }
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }

  return (
    <div className={classes.storySetWrapper}>
      <div className={`${classes.storySetTitle} title`}><h3><Link to={"/stories"}><span className={classes.arrow}>{props.title} </span></Link></h3></div>
      <div className={classes.storySetCollection}>
        {currentPageData}
      </div>
      {reactPaginate}
    </div>
  );
};

export default StorySet;