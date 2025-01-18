import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Web Speech API is not supported in this browser.");
    }
  };

  const handleStop = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        rows="5"
        cols="40"
      />
      <br />
      <button onClick={handleSpeak}>Speak</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
