import PropTypes from 'prop-types';

const Book = ({ name, author }) => (
  <li>
    <span>{name}</span>
    <span>{author}</span>
  </li>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
