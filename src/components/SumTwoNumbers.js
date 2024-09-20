import React, { useState } from 'react';

const SumTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const sum = (num1 !== '' && num2 !== '') ? Number(num1) + Number(num2) : '';

  return (
    <div>
      <label>Enter first number: </label>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        step="any"
      />
      <label>Enter second number: </label>
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        step="any"
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumTwoNumbers;
