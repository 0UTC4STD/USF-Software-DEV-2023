import React from 'react';
import addCommas from './addCommas';

function App() {
  const number = -7896865.856;
  const formattedNumber = addCommas(number);
  
  return (
    <div>
      <p>The formatted number is: {formattedNumber}</p>
    </div>
  );
}

export default App;