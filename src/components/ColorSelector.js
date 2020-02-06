import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import styles from './App.css';

const ColorSelector = () => {

  const [color, setColor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/color/${encodeURIComponent(color)}`);
  };

  const handleChange = ({ target }) => setColor(target.value);

  return (
    <>
      <form className={styles.colorSelector} onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <button>Go to color!</button>
      </form>
    </>
  );
};

ColorSelector.propTypes = {
  color: PropTypes.string,
};
  
export default ColorSelector; 
