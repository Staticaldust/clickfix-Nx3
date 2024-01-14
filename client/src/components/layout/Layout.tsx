import styles from './Layout.module.css';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */

export function Layout() {
  return (
    <div className={styles['container']}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
