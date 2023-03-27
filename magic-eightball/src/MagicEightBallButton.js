import React from "react";

const MagicEightBallButton = ({ onClick }) => {
  return (
    <button className="magic-eight-ball-button" onClick={onClick}>
      Shake
    </button>
  );
};

export default MagicEightBallButton;