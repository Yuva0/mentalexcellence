import CardSet from '../../cardset/CardSet';
import classes from './css/CardsPage.module.css';

const CardsPage = (props) => {
  return (
    <div className={classes.cardspage}>
        <CardSet title="All Cards" time="latest" type="card"/>
    </div>
  );
};

export default CardsPage;