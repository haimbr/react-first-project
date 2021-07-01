import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SubscribeForm from './SubscribeForm';



const LoginPage = () => {
    const [pageMode, setPageMode] = useState("login");

    return (
        <div className="login-page">
            <div className="login-page__form">
                {pageMode === "login" ? <LoginForm setPageMode={setPageMode} /> : <SubscribeForm setPageMode={setPageMode} />}      
            </div>
        </div>
    )
}

export default LoginPage;