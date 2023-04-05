import React, { useState } from "react";
import '../styles/Login.css';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>Log in</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email" id="email" name="email" />
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Forgot password?</button>
            <p>Don't have an account?</p>
            <button className="link-btn-two" onClick={() => props.onFormSwitch('register')}>Create account</button>
        </div>
    )
}