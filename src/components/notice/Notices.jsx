import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Notices() {
    const navigate = useNavigate();
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/notices');
                if (response.data.resultCode === 200) {
                    setNotices(response.data.resultData.notices);
                }
                setLoading(false);
            } catch (err) {
                setError('공지사항을 불러오는데 실패했습니다.');
                setLoading(false);
                console.error('Error fetching notices:', err);
            }
        };

        fetchNotices();
    }, []);

    const handleNoticeClick = (titleId) => {
        navigate(`/notice/${titleId}`);
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
                {/* 제목 */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">공고목록</h1>
                </div>

                {/* 공지사항 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {notices.map((notice) => (
                        <div
                            key={notice.titleId}
                            onClick={() => handleNoticeClick(notice.titleId)}
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