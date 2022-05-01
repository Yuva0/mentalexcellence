import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';

// Components
import Header from './components/layout/Header/Header';
import Homepage from './components/pages/homepage/Homepage';
import ArticlePage from './components/pages/articlepage/ArticlePage';
import CategoryPage from './components/pages/categorypage/CategoryPage';

function App() {
  return (
    <div className={classes.app}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/article/:idTitle" element={<ArticlePage/>}/>
        <Route path="/category/:category" element={<CategoryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
