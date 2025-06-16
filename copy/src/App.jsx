import React from "react";
import "./App.css";

const SpotlightCard = () => {
  return (
    <div className="spotlight-wrapper">
      <div className="spotlight-bg"></div>
      <div className="card-container">
        <img src="Kuldeep.png" alt="Kuldeep" className="floating-img" />
        <h2 className="card-name">Kuldeep</h2>
      </div>
    </div>
  );
};

export default SpotlightCard;
