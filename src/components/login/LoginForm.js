import React, { useState } from 'react';
import validator from 'validator';

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailInputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);


    const isFormInvalid = () => {
        return validator.isEmail(email) && password.length > 3;
    }

    const onEmailInputChange = (event) => {
        const input = event.target.value;
        setIsEmailInputValid(validator.isEmail(input));
        setEmail(input);

    };

    const onPasswordInputChange = (event) => {
        const input = event.target.value;
        setIsPasswordInputValid(input.length > 3);
        setPassword(input);
    };

    const onClickSubscribe = () => {
        props.setPageMode("subscribe");
    };

    return (
        <div className="login-form">
            <h3>Login</h3>
            <form>
                <input placeholder="email" onChange={onEmailInputChange} />
                {!isEmailInputValid && <div className="invalid-message">you must enter a valid email</div>}
                <input placeholder="password" onChange={onPasswordInputChange} />
                {!isPasswordInputValid && <div className="invalid-message">you must enter your password</div>}

                <div className="login-form__nav">
                    <button type="submit" disabled={!isFormInvalid()}>submit</button>
                    <div className="login-" onClick={onClickSubscribe}>subscribe</div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;