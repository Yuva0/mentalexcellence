import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';

// Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Homepage from './components/pages/homepage/Homepage';
import ArticlePage from './components/pages/articlepage/ArticlePage';
import CategoryPage from './components/pages/categorypage/CategoryPage';
import ArticlesPage from './components/pages/articlespage/ArticlesPage';
import StoriesPage from './components/pages/storiespage/StoriesPage';
import CardsPage from './components/pages/cardspage/CardsPage';
import CookieOverlay from './components/overlays/Cookies/CookieOverlay';

function App() {
  return (
    <div className={classes.app}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/article/:idTitle" element={<ArticlePage type="article"/>}/>
        <Route path="/story/:idTitle" element={<ArticlePage type="story"/>}/>
        <Route path="/category/:category" element={<CategoryPage/>}/>
        <Route path="/articles/" element={<ArticlesPage/>}/>
        <Route path="/stories/" element={<StoriesPage/>}/>
        <Route path="/cards/" element={<CardsPage/>}/>
      </Routes>
      <Footer/>
      <CookieOverlay/>
    </div>
  );
}

export default App;
