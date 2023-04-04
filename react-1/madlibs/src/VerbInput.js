import React from 'react';

function VerbInput({ value, onChange }) {
  return (
    <label>
      <input type="text" placeholder="verb" value={value} onChange={onChange} />
    </label>
  );
}

export default VerbInput;