import { BookList, NewBookForm } from '../../components';
import styles from './Home.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <section>
      <BookList />
    </section>
    <section>
      <NewBookForm />
    </section>
  </div>
);

export default HomePage;
