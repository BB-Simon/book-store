import PropTypes from 'prop-types';
import Button from '../Button';
import css from './Book.module.css';

const Book = ({
  name,
  author,
  id,
  remove,
}) => (
  <li className={css.book}>
    <span>{name}</span>
    <span>{author}</span>
    <Button title="Remove Book" onClick={() => remove(id)} />
  </li>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
