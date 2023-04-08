import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BookList, Line, NewBookForm } from '../../components';
import styles from './Home.module.css';
import { addBook, getBooks } from '../../redux/books/booksSlice';

const HomePage = () => {
  const { booksLoading, booksError } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <section>
        {booksLoading ? (
          <p>Books are loading...!</p>
        ) : null}
        {booksError ? (
          <p>Error:(</p>
        ) : null}
        {!booksLoading && !booksError ? <BookList /> : null}
      </section>
      <Line width="100%" margin="2.5rem 0 1.813rem" />
      <section className={styles.addBookFormSection}>
        <h2 className={styles.addBookTitle}>Add new book</h2>
        <NewBookForm onSubmit={(book) => dispatch(addBook(book))} />
      </section>
    </div>
  );
};

export default HomePage;
