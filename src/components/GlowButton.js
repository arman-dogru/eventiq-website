import React from 'react';
import './GlowButton.css'; // Make sure the path to your CSS file is correct

const GlowButton = ({ buttonText }) => {
  return (
    <div className="glowButtonWrapper">
        <button className="glowButton">
            <span className="buttonText">{buttonText}</span>
        </button>
    </div>
  );
};

export default GlowButton;
