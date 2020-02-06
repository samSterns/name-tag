import React from 'react'; 
import PropTypes from 'prop-types';
import styles from './App.css';

const TextSelector = () => {
  return (
    <>
      <form>
        <label className={styles.active}>
          <input className="text-selector" type="text" id="text-selector-area" name="text-selector" placeholder="Your Name" value={name} onChange={handleChange}></input>
        </label>
      </form>
    </>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextSelector; 
