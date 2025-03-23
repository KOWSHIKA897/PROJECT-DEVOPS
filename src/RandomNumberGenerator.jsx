import React, { useState } from "react";
import "./RandomNumberGenerator.css";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    const timestamp = new Date().toLocaleTimeString();
    setRandomNumber(newNumber);
    setHistory([...history, { number: newNumber, time: timestamp }]);
  };

  return (
    <div className="container full-screen">
      <h1 className="title">✨ Random Number Generator ✨</h1>
      <button className="generate-button" onClick={generateRandomNumber}>
        Generate Magic Number
      </button>
      {randomNumber !== null && <h2 className="number large-text">🎲 {randomNumber} 🎲</h2>}
      
      <button className="history-button" onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </button>
      
      {showHistory && (
        <div className="history-container">
          <h3 className="history-title">🔍 History</h3>
          <ul className="history-list">
            {history.map((entry, index) => (
              <li key={index} className="history-item">
                <span className="history-number">🎲 {entry.number}</span>
                <span className="history-time">⏰ {entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
