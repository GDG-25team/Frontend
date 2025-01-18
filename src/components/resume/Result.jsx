import React from 'react';

export default function Result() {
  // 예시 데이터 (실제로는 props나 API로 받아올 것입니다)
  const resultData = {
    carrer: [{
      companyName: "구글",
      work: "판매원",
      date: "2024년 1월 15일부터 2024년 2월 25일까지"
    }],
    license: [{
      name: "정보처리기사",
      date: "2024-01-18"
    },
    {
      name: "SQLD",
      date: "2024-01-15"
    }],
    introduction: "안녕하세요, 저는 올해 68세로 평생 지역 식당을 운영하며 사람들과 함께 성장해 온 박순자입니다..."
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
          {/* 제목 */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">이력서 결과</h1>
          </div>

          {/* 경력 사항 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">경력 사항</h2>
            {resultData.carrer.map((career, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-lg">{career.companyName}</p>
                <p className="text-gray-600">{career.work}</p>
                <p className="text-gray-500 text-sm">{career.date}</p>
              </div>
            ))}
          </div>

          {/* 자격증 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">자격증</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resultData.license.map((license, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{license.name}</p>
                  <p className="text-gray-500 text-sm">취득일: {license.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 자기소개 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">자기소개</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">
                {resultData.introduction}
              </p>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-center space-x-4 pt-4">
            <button 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-colors"
              onClick={() => window.print()}
            >
              인쇄하기
            </button>
            <button 
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-colors"
              onClick={() => window.location.href = '/'}
            >
              처음으로
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}