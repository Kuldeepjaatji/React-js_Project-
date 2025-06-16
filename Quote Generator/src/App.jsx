import React, { useState, useEffect } from "react";
import "./App.css";
import shayariList from "../api/ShayariList";

const QuoteGenerator = () => {
  const [shayari, setShayari] = useState({});
  
  const getRandomShayari = () => {
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    setShayari(shayariList[randomIndex]);
  };

  useEffect(() => {
    getRandomShayari();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">“{shayari.content}”</p>
        <p className="quote-author">— {shayari.author}</p>
        <button onClick={getRandomShayari} className="new-quote-btn">
          नई शायरी
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
