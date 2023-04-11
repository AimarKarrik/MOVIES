import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import '../styles/Login.css';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [formError, setFormError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (!email || !password) {
            setFormError("Please fill out all fields."); 
            return; 
        }

        if (email === storedEmail && password === storedPassword) {
            console.log('Logged in successfully!');
            navigate('/');
        } else {
            console.log('Invalid email or password');
        }
    };
    return (
    <div className="Login">
        <div className="Login-form-container">
            <Link to='/'>
                <button className="btn"><FaAngleLeft className="icon"></FaAngleLeft></button>
            </Link>
            <h1>Log in</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email" id="email" name="email" />
                {!email}
                <label htmlFor="password"></label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                {!password}
                {formError && <p className="form-error">{formError}</p>}
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Forgot password?</button>
            <p>Don't have an account?</p>
            <Link className="link" to="/Signup">
                <button className="link-btn-two" onClick={() => props.onFormSwitch('register')}>Create account</button>
            </Link>
        </div>
    </div>
    )
}