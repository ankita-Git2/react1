import React, { useState } from 'react';

const ToggleElement = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <p>Hola, I'm visible!</p>}
      <button onClick={() => setVisible(!visible)}>Show/Hide</button>
    </div>
  );
};

export default ToggleElement;
