import React, { useState, useEffect, useRef } from "react";
import "./StopwatchApp.css";

// Format time as HH:MM:SS:CS (CS = centiseconds = ms/10)
const formatTime = (ms) => {
  const getFormatted = (val, len = 2) => String(val).padStart(len, "0");

  const hours = getFormatted(Math.floor(ms / 3600000));
  const minutes = getFormatted(Math.floor((ms % 3600000) / 60000));
  const seconds = getFormatted(Math.floor((ms % 60000) / 1000));
  const centiseconds = getFormatted(Math.floor((ms % 1000) / 10)); // 2 digits

  return `${hours}:${minutes}:${seconds}:${centiseconds}`;
};

const StopwatchApp = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timerState"));
    if (stored) {
      setTime(stored.time || 0);
      setInitialTime(stored.initialTime || 0);
      setLaps(stored.laps || []);
      setIsCountdown(stored.isCountdown || false);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "timerState",
      JSON.stringify({ time, initialTime, laps, isCountdown })
    );
  }, [time, initialTime, laps, isCountdown]);

  // Timer interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (isCountdown) {
            if (prev > 0) return prev - 10;
            setIsRunning(false);
            return 0;
          } else {
            return prev + 10;
          }
        });
      }, 10); // update every 10 ms
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, isCountdown]);

  const handleStartPause = () => {
    if (isCountdown && time === 0 && initialTime > 0) {
      setTime(initialTime);
    }
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(isCountdown ? initialTime : 0);
    setLaps([]);
  };

  const handleLap = () => {
    if (!isRunning) return;
    setLaps((prev) => [...prev, formatTime(time)]);
  };

  const handleCountdownSetup = () => {
    const input = prompt("Enter countdown time in seconds:");
    const seconds = parseFloat(input);
    if (!isNaN(seconds) && seconds > 0) {
      const ms = Math.floor(seconds * 1000);
      setInitialTime(ms);
      setTime(ms);
      setIsCountdown(true);
      setLaps([]);
      setIsRunning(false);
    }
  };

  const handleModeToggle = () => {
    setIsCountdown((prev) => !prev);
    setTime(0);
    setInitialTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  return (
    <div className="app">
      <div className="timer-container">
        <h1 className="title">{isCountdown ? "Countdown Timer" : "Stopwatch"}</h1>
        <div className="time-display">{formatTime(time)}</div>

        <div className="buttons">
          <button onClick={handleStartPause} className="btn start">
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset} className="btn reset">Reset</button>
          <button onClick={handleLap} className="btn lap">Lap</button>
          <button
            onClick={isCountdown ? handleCountdownSetup : handleModeToggle}
            className="btn mode"
          >
            {isCountdown ? "Set Time" : "Switch to Countdown"}
          </button>
        </div>

        {laps.length > 0 && (
          <div className="laps">
            <h2>Laps</h2>
            <ul>
              {laps.map((lap, i) => (
                <li key={i}>Lap {i + 1}: {lap}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StopwatchApp;
