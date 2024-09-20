import React from 'react';

const records = ['Metasploit', 'Nmap', 'Wireshark', 'shodan'];

const RecordsList = () => {
  return (
    <div>
      {records.map((record, index) => (
        <p key={index}>{record}</p>
      ))}
    </div>
  );
};

export default RecordsList;
