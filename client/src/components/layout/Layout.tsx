import styles from './Layout.module.css';
import NewHeader from '../header/NewHeader';
import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */

export function Layout() {
  return (
    <div className={styles['container']}>
      <NewHeader />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
