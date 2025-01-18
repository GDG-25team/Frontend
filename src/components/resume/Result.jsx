import React from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useTextToSpeech } from '../TextToSpeech';

// 정보 섹션 컴포넌트
function InfoSection({ title, content }) {
    const { speak, stop } = useTextToSpeech();
    
    const handleSpeak = () => {
        speak(`${title}, ${content}`);
    };

    return (
        <div className="border-b pb-4">
            <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                </h2>
                <button 
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={handleSpeak}
                >
                    <SpeakerWaveIcon className="h-5 w-5 text-gray-600" />
                </button>
            </div>
            <p className="text-gray-700 whitespace-pre-line">
                {content}
            </p>
        </div>
    );
}

// 자격증 섹션 컴포넌트 추가
function LicenseSection({ title, licenses }) {
    const { speak } = useTextToSpeech();
    
    const handleSpeak = () => {
        const licenseText = licenses.map(license => 
            `${license.name}, 취득일: ${license.date}`
        ).join(', ');
        speak(`${title}, ${licenseText}`);
    };

    return (
        <div className="border-b pb-4">
            <div className="flex items-center space-x-2 mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                </h2>
                <button 
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={handleSpeak}
                >
                    <SpeakerWaveIcon className="h-5 w-5 text-gray-600" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {licenses.map((license, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                    >
                        <p className="font-semibold text-gray-900">{license.name}</p>
                        <p className="text-gray-600 text-sm mt-1">취득일: {license.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Result() {
    const { speak } = useTextToSpeech();
    
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
                <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-8rem)]">
                    <div className="flex flex-col justify-between h-full">
                        {/* 제목 */}
                        <div className="flex items-center justify-center space-x-2 mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">이력서 결과</h1>
                            <button 
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => speak("이력서 결과")}
                            >
                                <SpeakerWaveIcon className="h-6 w-6 text-gray-600" />
                            </button>
                        </div>

                        {/* 내용 */}
                        <div className="space-y-6 flex-grow">
                            {/* 경력 사항 */}
                            <div className="space-y-4 mb-8">
                                <InfoSection 
                                    title="경력 사항" 
                                    content={resultData.carrer.map(career => 
                                        `${career.companyName}에서 ${career.work}으로 ${career.date} 근무`
                                    ).join('\n')} 
                                />
                            </div>

                            {/* 자격증 */}
                            <div className="space-y-4 mb-8">
                                <LicenseSection 
                                    title="자격증" 
                                    licenses={resultData.license}
                                />
                            </div>

                            {/* 자기소개 */}
                            <div className="space-y-4">
                                <InfoSection 
                                    title="자기소개" 
                                    content={resultData.introduction} 
                                />
                            </div>
                        </div>

                        {/* 버튼 */}
                        <div className="mt-8 flex justify-center space-x-4">
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
            </div>
        </main>
    );
}