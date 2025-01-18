import React from 'react';

export const useTextToSpeech = () => {
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Web Speech API is not supported in this browser.");
    }
  };

  const stop = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  return { speak, stop };
};

// 컴포넌트로도 사용 가능
export default function TextToSpeech({ text }) {
  const { speak, stop } = useTextToSpeech();

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => speak(text)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        Speak
      </button>
      <button 
        onClick={stop}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        Stop
      </button>
    </div>
  );
}