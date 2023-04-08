import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <h1 className={styles.logo}>Bookstore CMS</h1>
    <div className={styles.navItemContainer}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
          >
            Books
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className={styles.navItem}>
          <button type="button" className={styles.menuBtn}>
            <FontAwesomeIcon color="#0290ff" icon={faUser} />
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
