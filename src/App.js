import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import './App.css';
import { useTextToSpeech } from './components/TextToSpeech';

function App() {
  const { speak, stop } = useTextToSpeech();
  const questionTitle = "오늘의 질문";

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
              당신이 가장 좋아하는 프로그래밍 언어는 무엇인가요?
            </p>

            {/* 답변 버튼 */}
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                답변하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
