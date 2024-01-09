// import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';
import styles from './HomePage.module.css';
import { Welcome } from '../welcome/Welcome';
/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  // const navigate = useNavigate()
  return (
    <div className={styles['container']}>
      {/* <button onClick={ () => navigate('/user')}>
      </button> */}
      <Welcome />
    </div>
  );
}

export default HomePage;
