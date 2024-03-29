import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button onClick={handleGoBack}>Go Back</button>
  );
};

export default GoBackButton;