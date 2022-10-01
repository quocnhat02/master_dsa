import React, { useState } from 'react';

const index = () => {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState('');

  const handleChange = (e) => setMessage(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setUpdated(message);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <h2>Message: {message}</h2>
      <h2>Updated: {updated}</h2>
    </div>
  );
};

export default index;
