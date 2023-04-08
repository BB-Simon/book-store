import PropTypes from 'prop-types';
import Button from '../Button';
import css from './Book.module.css';
import Line from '../Line';

const Book = ({
  name,
  author,
  id,
  remove,
}) => (
  <li className={css.book}>
    <div className={css.action}>
      <span className={css.tag}>Action</span>
      <span className={css.title}>{name}</span>
      <span className={css.author}>{author}</span>
      <div className={css.actionBtnsContainer}>
        <Button className={css.btn} title="Comment" />
        <Line height="1.5rem" margin="auto 1.063rem" />
        <Button className={css.btn} title="Remove" onClick={() => remove(id)} />
        <Line height="1.5rem" margin="auto 1.063rem" />
        <Button className={css.btn} title="Edit" />
      </div>
    </div>
    <div className={css.progress}>
      <div className={css.progressInfo}>
        <div className={css.oval} />
        <div className={css.progressParcent}>
          <span className={css.parcent}>89%</span>
          <span className={css.parcentTag}>Completed</span>
        </div>
      </div>
      <Line height="4.375rem" margin="auto 2.5rem" />
      <div className={css.progressAction}>
        <span className={css.chapter}>Current Chapter</span>
        <span className={css.chapterNumber}>Chapter 17</span>
        <Button title="Update Progress" className={css.progressBtn} />
      </div>
    </div>
  </li>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
