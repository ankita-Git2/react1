import React, { useState } from 'react';

const AddTechnology = () => {
  const [techList, setTechList] = useState(['Shodan', 'Nmap', 'Wireshark', 'Metasploit']);
  const [newTech, setNewTech] = useState('');

  const addTech = () => {
    setTechList([...techList, newTech]);
    setNewTech('');
  };

  return (
    <div>
      <ul>
        {techList.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button onClick={addTech}>Add Tools</button>
    </div>
  );
};

export default AddTechnology;
