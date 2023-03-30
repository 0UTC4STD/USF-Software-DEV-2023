import React from 'react';

const Box = ({ width, height, backgroundColor, id, removeBox }) => {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div style={styles}>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;