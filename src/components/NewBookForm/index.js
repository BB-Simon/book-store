import { useState } from 'react';
import PropTypes from 'prop-types';

const NewBookForm = ({ onSubmit }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleOnChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      item_id: Date.now().toString(),
      ...book,
    });
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleOnChange}
        placeholder="Book name"
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleOnChange}
        placeholder="Author name"
      />
      <input type="submit" value="Add new Book" />
    </form>
  );
};

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
