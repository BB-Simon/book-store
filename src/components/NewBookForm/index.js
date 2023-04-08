import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './NewBookForm.module.css';

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
    <form className={css.form} onSubmit={handleOnSubmit}>
      <input
        className={css.titleInput}
        type="text"
        name="title"
        value={book.title}
        onChange={handleOnChange}
        placeholder="Book name"
      />
      <input
        className={css.authorInput}
        type="text"
        name="author"
        value={book.author}
        onChange={handleOnChange}
        placeholder="Author name"
      />
      <input className={css.submitInput} type="submit" value="Add new Book" />
    </form>
  );
};

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
