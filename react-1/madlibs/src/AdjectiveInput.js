import React from 'react';

function AdjectiveInput({ value, onChange }) {
  return (
    <label>
      <input type="text" placeholder="adjective" value={value} onChange={onChange} />
    </label>
  );
}

export default AdjectiveInput;