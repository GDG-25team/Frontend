import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notices() {
    const navigate = useNavigate();
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 더미 데이터 정의
    const defaultNotices = [
        {
            id: '1',
            title: '어린이교통안전지킴이',
            location: '서울시 강남구',
            activity_schedule: '월~금 09:00-18:00',
            activity_allowance: '시급 9,620원'
        },
        {
            id: '2',
            title: '복지시설봉사단',
            location: '서울시 강남구',
            activity_schedule: '월~금 09:00-18:00',
            activity_allowance: '시급 9,620원'
        },
        {
            id: '3',
            title: '커피찌꺼기 새활용(새활용사업단)',
            location: '서울시 강남구',
            activity_schedule: '월~금 09:00-18:00',
            activity_allowance: '시급 9,620원'
        }
    ];

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/notices`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                if (data.resultCode === 200) {
                    setNotices(data.resultData);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching notices:', err);
                // 에러 발생 시 더미데이터 사용
                setNotices(defaultNotices);
                setLoading(false);
                // 에러 메시지는 표시하지 않음 (더미데이터를 보여줄 것이므로)
                setError(null);
            }
        };

        fetchNotices();
    }, []);

    const handleNoticeClick = (id) => {
        navigate(`/notice/${id}`);
    };

    if (loading) {
        return (
            <main className="pt-16 min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 py-8 text-center">
                    <p>로딩 중...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* 제목 */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">공고목록</h1>
                </div>

                {/* 공지사항 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(notices || defaultNotices).map((notice) => (
                        <div
                            key={notice.id}
                            onClick={() => handleNoticeClick(notice.id)}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                {notice.title}
                            </h2>
                            <p className="text-gray-600">
                                {notice.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}