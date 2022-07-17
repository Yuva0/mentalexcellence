import ArticleSet from '../../articleset/ArticleSet';
import classes from './css/ArticlesPage.module.css';

const ArticlesPage = (props) => {

  return (
    <div className={classes.articlespage}>
        <ArticleSet title="All Articles" time="latest" type="article"/>
    </div>
  );
};

export default ArticlesPage;