import React from "react"

const Login = () =>
{
    const Rest_api_key='29b815bb1d6e2bfd10a26226a842d588' //REST API KEY
    const redirect_uri = 'http://api/v1/auth/signup' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <div style={{ display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",paddingTop: "40vh"}}>
            <img src="kakao.png" onClick={handleLogin} style={{  display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",paddingTop: "40vh" }} />
    
    </div>
    )
}
export default Login