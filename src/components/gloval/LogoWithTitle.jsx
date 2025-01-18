import React, { useState, useEffect } from 'react';

export default function LogoWithTitle({ animate = true }) {
    const [text, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(!animate);
    const fullText = '어르신 희망터';

    useEffect(() => {
        if (animate && text.length < fullText.length) {
            const timeoutId = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 200);
            return () => clearTimeout(timeoutId);
        } else if (animate) {
            setIsTypingComplete(true);
        }
    }, [text, animate]);

    return (
        <>
            {/* 로고 */}
            <div className="mb-8 transform transition-transform duration-1000 hover:scale-110 -mt-80">
                <img
                    src={process.env.PUBLIC_URL + '/logo123.png'}
                    alt="어르신 희망터 로고"
                    className="w-64 h-64 mx-auto"
                />
            </div>
            
            {/* 타이틀 */}
            <div className="relative mb-12">
                <h1 className="text-4xl font-bold text-gray-900">
                    {animate ? text : fullText}
                    {animate && (
                        <span className={`inline-block w-0.5 h-8 bg-gray-900 ml-1 ${isTypingComplete ? 'animate-pulse' : 'animate-blink'}`}>
                        </span>
                    )}
                </h1>
            </div>
        </>
    );
} 