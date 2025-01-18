import React, { useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useTextToSpeech } from './TextToSpeech';
import SpeechRecognition from './SpeechToText';

export default function Resume() {
  const { speak, stop } = useTextToSpeech();
  const questionTitle = "주요 경력 사항이 어떻게 되세요?";
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("ex) 나는 20년 동안 벼농사를 했지, 그러나 최근에는 컴퓨터 프로그래밍을 배웠어요.");

  const handleSpeechResult = (text) => {
    setAnswer(text);
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 질문 카드 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* 질문 제목 */}
            <div className="flex items-center justify-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {questionTitle}
              </h1>
              <button 
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => speak(questionTitle)}
              >
                <SpeakerWaveIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            {/* 질문 내용 */}
            <p className="text-lg text-gray-700">
              {answer}
            </p>

            {/* 답변 버튼 */}
            <div className="flex justify-end">
              <button 
                className={`px-6 py-2 ${isListening ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-lg hover:opacity-90 transition-colors`}
                onClick={() => setIsListening(!isListening)}
              >
                {isListening ? '답변 중지' : '답변하기'}
              </button>
            </div>
            <div className="flex justify-end">
              <button 
                className={`px-6 py-2 ${isListening ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-lg hover:opacity-90 transition-colors`}
                onClick={() => setAnswer('')}
              >
                다시하기
              </button>
            </div>
          </div>
        </div>
      </div>
      {isListening && (
        <SpeechRecognition 
          onResult={handleSpeechResult}
          isListening={isListening}
          onListeningChange={setIsListening}
        />
      )}
    </main>
  );
}