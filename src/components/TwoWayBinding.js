// TwoWayBinding.js
import React, { useState } from 'react';

const TwoWayBinding = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label>Enter text: </label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  );
};

export default TwoWayBinding;
