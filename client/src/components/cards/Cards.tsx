// import styles from '../styles.module.css';
// import ImageCard from '../imageCard/ImageCard';
// import { Tps } from '../Tp';
// import { trpc } from '../../utils/trpc';

// /* eslint-disable-next-line */
// export interface CardsProps {}

// export function Cards(props: CardsProps) {
//   const tps: object[] = trpc.tps.useQuery().data;
//   return (
//     <div className={styles['container']}>
//       <div className={`${styles.container} flex`} style={{ margin: '100px' }}>
//         {tps.map(() => (
//           <ImageCard key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;
import styles from '../styles.module.css';
import ImageCard from '../imageCard/ImageCard';
/* eslint-disable-next-line */
export interface CardsProps {}

export function Cards(props: CardsProps) {
  const numberOfCards = 6;
  const cards = Array.from({ length: numberOfCards }, (_, index) => index);
  return (
    <div className={styles['container']}>
      <div className={`${styles.container} flex`} style={{ margin: '100px' }}>
        {cards.map((index) => (
          <ImageCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
