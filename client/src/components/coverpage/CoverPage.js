import CoverPageArticle from './CoverPageArticle';

import classes from './css/CoverPage.module.css';

import crown from '../../assets/images/crown.png';

const CoverPage = () => {
  return (
    <div className={classes.coverpage}>
      {/* Image Source: https://www.flaticon.com/premium-icon/crown_1692230?term=crown&page=1&position=8&page=1&position=8&related_id=1692230&origin=tag */}
      <div className={classes.crown}><img src={crown} alt="crown"/></div> 
      <CoverPageArticle/>
    </div>
  );
};

export default CoverPage;