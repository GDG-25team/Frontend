import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom";

const Login = () =>
{
    const [query, setQuery] = useSearchParams();
    const [param, setParam] = useState(query.get('code'))
    console.log(param)
    const login = async () => {
        try {
            console.log("start")
            const response = await fetch('http://192.168.56.196:8080/api/v1/auth/signup', {
                  method: "POST",
                body: JSON.stringify({
                    code: param
                }),
            });
            console.log("---------------------")
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
            login();
        
    
  }, []);

    const Rest_api_key='29b815bb1d6e2bfd10a26226a842d588' //REST API KEY
    // const redirect_uri = 'http://210.106.232.133:8080/api/v1/auth/signup' //Redirect URI
    const redirect_uri = 'http://localhost:3000/login' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <div style={{ display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",paddingTop: "30vh",paddingLeft:"10px",paddingRight:"10px"}}>
            <img src="kakao.png" onClick={handleLogin} style={{  display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",paddingTop: "30vh",paddingLeft:"10px",paddingRight:"10px" }} />
    
    </div>
    )
}
export default Login