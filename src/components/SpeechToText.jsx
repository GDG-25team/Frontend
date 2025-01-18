import React, { useEffect, useRef } from "react";

const SpeechToText = ({ onResult, isListening, onListeningChange }) => {
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Web Speech API is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      onResult(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      onListeningChange(false);
    };

    recognition.onend = () => {
      onListeningChange(false);
    };

    recognitionRef.current = recognition;

    if (isListening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, onResult, onListeningChange]);

  return null;
};

export default SpeechToText;