import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWithTitle from './components/gloval/LogoWithTitle';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/login');
        }, 3000);  // 타이핑 효과 + 대기 시간
        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="text-center">
                <LogoWithTitle animate={true} />
            </div>
        </main>
    );
}

export default App;