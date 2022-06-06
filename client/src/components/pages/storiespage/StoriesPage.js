import StorySet from '../../storyset/StorySet';
import classes from './css/StoriesPage.module.css';

const StoriesPage = (props) => {
  return (
    <div className={classes.storiespage}>
        <StorySet title="All Stories" time="latest" type="story"/>
    </div>
  );
};

export default StoriesPage;