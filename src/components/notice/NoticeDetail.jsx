import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useTextToSpeech } from '../TextToSpeech';

export default function NoticeDetail() {
    const { id } = useParams();
    const [notice, setNotice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 더미 데이터
    const dummyData = {
        resultCode: 200,
        resultData: {
            title: "노인일자리 참여자 모집",
            activity_schedule: "월~금 09:00-18:00",
            activity_allowance: "시급 9,620원",
            eligibility_criteria: "만 65세 이상 기초연금수급자",
            eligibility_exception: "국민기초생활보장법에 의한 생계급여 수급자",
            selection_criteria: "연령, 세대구성, 경력 등을 고려하여 선발",
            required_documents: "신분증, 주민등록등본, 기초연금수급자 확인서",
            application_location: "서울특별시 중구 을지로 1가 100번지"
        }
    };

    useEffect(() => {
        const fetchNoticeDetail = async () => {
            try {
                // 실제 API 연동 시 사용할 코드
                // const response = await axios.get(`http://localhost:8080/api/v1/notices/${id}`);
                // setNotice(response.data.resultData);
                
                // 더미 데이터 사용
                setNotice(dummyData.resultData);
                setLoading(false);
            } catch (err) {
                setError('공고 상세 정보를 불러오는데 실패했습니다.');
                setLoading(false);
                console.error('Error fetching notice detail:', err);
            }
        };

        fetchNoticeDetail();
    }, [id]);

    if (loading) {
        return (
            <main className="pt-16 min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 py-8 text-center">
                    <p>로딩 중...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="pt-16 min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 py-8 text-center text-red-600">
                    <p>{error}</p>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    {/* 제목 */}
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {notice.title}
                        </h1>
                        <button 
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => 
                                (notice.title)}
                        >
                            <SpeakerWaveIcon className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* 상세 정보 */}
                    <div className="space-y-6">
                        <InfoSection title="활동 시간" content={notice.activity_schedule} />
                        <InfoSection title="활동비" content={notice.activity_allowance} />
                        <InfoSection title="신청 자격" content={notice.eligibility_criteria} />
                        <InfoSection title="신청 제한" content={notice.eligibility_exception} />
                        <InfoSection title="선발 기준" content={notice.selection_criteria} />
                        <InfoSection title="준비 서류" content={notice.required_documents} />
                        <InfoSection title="신청 장소" content={notice.application_location} />
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
                            onClick={() => window.history.back()}
                        >
                            목록으로
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

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
            <p className="text-gray-700">
                {content}
            </p>
        </div>
    );
}