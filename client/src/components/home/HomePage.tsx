// import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';
import styles from './HomePage.module.css';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  // const navigate = useNavigate()
  return (
    <div className={styles['container']}>
      {/* <button onClick={ () => navigate('/user')}>
      </button> */}
      <Login />
    </div>
  );
}

export default HomePage;
