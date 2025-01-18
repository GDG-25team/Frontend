import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Result() {
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true);

    // 기본 더미 데이터 정의
    const defaultResumeData = {
        intro: "안녕하세요. 저는 30년간 개발을 한 프론트 개발자 입니다.",
        career: "- 구글 개발자\n- 프론트개발\n",
        certificate: "- 정보처리기사\n- SQLD"
    };
    const submitResume = () => {
        alert("제출되었습니다.");
        window.location.href = `${process.env.REACT_APP_CLIENT_URL}/notice`;

    }

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/resume`);
                if (response.data.resultCode === 200) {
                    setResumeData(response.data.resultData);
                } else {
                    throw new Error('Failed to fetch resume data');
                }
            } catch (error) {
                console.error('Error fetching resume:', error);
                // 에러 발생 시 기본 데이터 사용
                setResumeData(defaultResumeData);
            } finally {
                setLoading(false);
            }
        };

        fetchResumeData();
    }, []);

    if (loading) {
        return (
            <main className="pt-16 min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 py-8 text-center">
                    <p>이력서를 생성하고 있습니다...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    {/* 제목 */}
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        이력서
                    </h1>

                    {/* 자기소개 */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">자기소개</h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {resumeData?.intro || defaultResumeData.intro}
                        </p>
                    </section>

                    {/* 경력사항 */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">경력사항</h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {resumeData?.career || defaultResumeData.career}
                        </p>
                    </section>

                    {/* 자격증 */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">자격증</h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {resumeData?.certificate || defaultResumeData.certificate}
                        </p>
                    </section>

                    {/* 버튼 */}
                    <div className="flex justify-center space-x-4">
                        <button 
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-colors"
                            onClick={() => submitResume()}
                        >
                            제출하기
                        </button>
                        <button 
                            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-colors"
                            onClick={() => window.history.back()}
                        >
                            돌아가기
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}