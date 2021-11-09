import styles from "./Button.module.css";

import PropTypes from "prop-types";

const Button = ({ text, url }) => {
  return (
    <button className={styles.button} href={url}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

export default Button;
