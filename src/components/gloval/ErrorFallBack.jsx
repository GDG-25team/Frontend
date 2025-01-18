import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorFallback() {
    const navigate = useNavigate();

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
                    <h1 className="text-3xl font-bold mb-4">오류가 발생했습니다</h1>
                    <p className="text-gray-600 mb-8">
                        죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        메인으로 돌아가기
                    </button>
                </div>
            </div>
        </main>
    );
}
  