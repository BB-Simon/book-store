import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BookList, NewBookForm } from '../../components';
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
      <section>
        <NewBookForm onSubmit={(book) => dispatch(addBook(book))} />
      </section>
    </div>
  );
};

export default HomePage;
