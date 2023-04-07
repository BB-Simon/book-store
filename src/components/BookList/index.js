import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book';
import { removeBook } from '../../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  return (
    <ul>
      {books && books.map((book) => (
        <Book
          key={book.id}
          name={book.title}
          author={book.author}
          id={book.id}
          remove={(id) => dispatch(removeBook(id))}
        />
      ))}
    </ul>
  );
};

export default BookList;
