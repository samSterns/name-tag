import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import styles from './App.css';

const TextSelector = () => {

  const [text, setText] = useState('');

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   history.push(`/color/${encodeURIComponent(text)}`);
  // };

  const handleChange = ({ target }) => setText(target.value);

  return (
    <>
      <form>
        <label className={styles.active}>
          <input className="text-selector" type="text" id="text-selector-area" name="text" placeholder="Your Name" value={name} onChange={handleChange}></input>
        </label>
      </form>
    </>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string,
};

export default TextSelector; 
