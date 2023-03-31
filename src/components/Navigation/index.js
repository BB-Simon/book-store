import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <h1>Bookstore CMS</h1>
    <div className={styles.navItemContainer}>
      <ul className={styles.navItems}>
        <li className={styles.navLink}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Books
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>Menu</li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
