import { useDispatch } from 'react-redux';
import { BookList, NewBookForm } from '../../components';
import { addBook } from '../../redux/books/booksSlice';
import styles from './Home.module.css';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <section>
        <BookList />
      </section>
      <section>
        <NewBookForm onSubmit={(book) => dispatch(addBook(book))} />
      </section>
    </div>
  );
};

export default HomePage;
