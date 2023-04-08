import PropTypes from 'prop-types';

const Button = ({ title, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>{title}</button>
);

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
