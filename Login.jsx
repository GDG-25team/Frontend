import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const REST_API_KEY = '29b815bb1d6e2bfd10a26226a842d588';
    const REDIRECT_URI = 'http://localhost:3000/login';
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const code = new URLSearchParams(location.search).get("code");
        if (code) {
            handleKakaoLogin(code);
        }
    }, [location]);

    const handleKakaoLogin = async (code) => {
        try {
            const response = await axios({
                method: 'post',
                url: '/api/v1/auth/signup',
                data: { code },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            console.log('Server Response:', response);

            if (response.data.resultCode === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/notice');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                alert(`로그인 실패: ${error.response.data.message || '알 수 없는 오류가 발생했습니다.'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('서버와 통신할 수 없습니다. 네트워크 연결을 확인해주세요.');
            } else {
                console.error('Error message:', error.message);
                alert('로그인 처리 중 오류가 발생했습니다.');
            }
        }
    };

    const handleLogin = () => {
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        window.location.href = kakaoURL;
    };

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="text-center">
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
                        어르신 희망터
                    </h1>
                </div>

                {/* 카카오 로그인 버튼 */}
                <div className="mt-8">
                    <button
                        onClick={handleLogin}
                        className="flex items-center justify-center bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#391B1B] px-8 py-4 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg"
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/kakao.png'}
                            alt="카카오 로그인"
                            className="h-100 w-80 mr-3"
                        />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Login; 