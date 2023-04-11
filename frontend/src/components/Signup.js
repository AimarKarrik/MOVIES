import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import '../styles/Signup.css';

export default function Signup(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [formError, setFormError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            setFormError("Please fill out all fields."); 
            return; 
        }

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        console.log('Registered data saved to local storage!');
        navigate('/Login');
    };

    return (
        <div className="Signup">
            <div className="Signup-form-container">
                <Link to='/'>
                    <button className="btn"><FaAngleLeft className="icon"></FaAngleLeft></button>
                </Link>
                <h1>Sign up</h1>
                <form className="Signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="first-name"></label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" id="first-name" name="first-name" />
                    {!firstName}
                    <label htmlFor="last-name"></label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" id="last-name" name="last-name" />
                    {!lastName}
                    <label htmlFor="email"></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" id="email" name="email" />
                    {!email}
                    <label htmlFor="password"></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                    {!password}
                    {formError && <p className="form-error">{formError}</p>}
                    <button type="submit">Sign up</button>
                </form>
                <p>Do you have an account?</p>
                <Link className="link" to="/Login">
                    <button className="link-btn-two" onClick={() => props.onFormSwitch('register')}>Log in</button>
                </Link>
            </div>
        </div>
    )
}