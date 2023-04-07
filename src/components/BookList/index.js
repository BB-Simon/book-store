import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book';
import { removeBook } from '../../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <ul>
      {books.length > 0 && books.map((book) => (
        <Book
          key={book.item_id}
          name={book.title}
          author={book.author}
          id={book.item_id}
          remove={(id) => dispatch(removeBook(id))}
        />
      ))}
    </ul>
  );
};

export default BookList;
