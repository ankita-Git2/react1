import React, { useState } from 'react';

const EnableDisableButton = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>Enable/Disable</button>
      <button disabled={!enabled}>Click Me</button>
    </div>
  );
};

export default EnableDisableButton;
