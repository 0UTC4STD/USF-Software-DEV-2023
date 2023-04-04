import React from 'react';

function NounInput({ value, onChange }) {
  return (
    <label>
      <input type="text" placeholder="noun" value={value} onChange={onChange} />
    </label>
  );
}

export default NounInput;