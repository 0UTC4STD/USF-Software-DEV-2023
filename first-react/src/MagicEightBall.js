import React, { useState } from 'react';
import MagicEightBallButton from './MagicEightBallButton';
import './MagicEightBall.css';
import answers from './answers';

function MagicEightBall() {
  const [answer, setAnswer] = useState({});

  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="MagicEightBall">
      <div className={`MagicEightBall-circle ${answer.color}`}>
        <div className="MagicEightBall-text">{answer.msg}</div>
      </div>
      <MagicEightBallButton onClick={getAnswer} />
    </div>
  );
}

export default MagicEightBall;