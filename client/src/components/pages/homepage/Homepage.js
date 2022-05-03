import { useEffect, useState } from 'react';
// import axios from "axios";
import classes from './css/Homepage.module.css';


import CoverPage from '../../coverpage/CoverPage';

import MediumSet from '../../mediumset/MediumSet';
import AllSet from '../../allset/AllSet';
import Qotd from '../../qotd/Qotd';

// import TabularCollection from '../../components/Collection/TabularCollection/TabularCollection';
// import SmallSetCollection from '../../components/Collection/SmallSetCollection/SmallSetCollection';

const Homepage = (props) => {
  // const [posts, setPosts] = useState([]);

  // const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("http://localhost:5000/api/posts");

  //     setPosts(res.data);
  //   }

  //   fetchPosts();
  // }, [])
  return (
    <div className={classes.homepage}>
       <CoverPage />
       <MediumSet title="Latest Articles" time="latest" type="article"/>
      {/* <AllSet title="All Articles" time="latest" type="article"/> */}
      <Qotd/>
    </div>
  );
};

export default Homepage;