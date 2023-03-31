import Book from '../Book';

const books = [
  {
    id: 1,
    name: 'Book1',
    author: 'Author1',
  },
  {
    id: 2,
    name: 'Book2',
    author: 'Author2',
  },
  {
    id: 3,
    name: 'Book3',
    author: 'Author3',
  },
];

const BookList = () => (
  <ul>
    {books && books.map((book) => (
      <Book key={book.id} name={book.name} author={book.author} />
    ))}
  </ul>
);

export default BookList;
