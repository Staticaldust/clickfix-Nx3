import styles from './Cards.module.css';
import Card from '../card/Card';
/* eslint-disable-next-line */
export interface CardsProps {}

export function Cards(props: CardsProps) {
  const numberOfCards = 6;
  const cards = Array.from({ length: numberOfCards }, (_, index) => index);
  return (
    <div className={styles['container']}>
      <div className={`${styles.container} flex`} style={{ margin: '100px' }}>
        {cards.map((index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
