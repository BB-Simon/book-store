import PropTypes from 'prop-types';
import css from './Line.module.css';

const Line = ({ width, height, margin }) => (
  <div
    className={css.line}
    style={{ width, height, margin }}
  />
);

Line.defaultProps = {
  width: '1px',
  height: '1px',
  margin: '8px 12px',
};

Line.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

export default Line;
