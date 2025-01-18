import React, { useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useTextToSpeech } from '../TextToSpeech';
import SpeechRecognition from '../SpeechToText';
import axios from 'axios';

export default function Certificate() {
  const { speak, stop } = useTextToSpeech();
  const questionTitle = "자격증을 가지고 계세요?";
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("ex) 나는 뭐 정처기랑 SQLD 있어요");
  const handleSpeechResult = (text) => {
    setAnswer(text);
  };

  const sendCareer = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/resume/certificate', {
        text: answer
      });
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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

            {/* 답변 버튼들 */}
            <div className="flex justify-center space-x-4">
              <button 
                className={`px-6 py-2 ${isListening ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-lg hover:opacity-90 transition-colors`}
                onClick={() => setIsListening(!isListening)}
              >
                {isListening ? '답변 중지' : '답변하기'}
              </button>
              <button 
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-colors"
                onClick={() => setAnswer('')}
              >
                다시하기
              </button>
              <button 
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-colors"
                onClick={() => sendCareer()}
              >
                다음
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