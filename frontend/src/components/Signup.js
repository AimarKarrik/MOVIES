import React, { useState } from "react";
import '../styles/Signup.css';

export default function Signup(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
      };

    return (
        <div className="Signup-form-container">
            <h1>Sign up</h1>
            <form className="Signup-form" onSubmit={handleSubmit}>
                <label htmlFor="first-name"></label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" id="first-name" name="first-name" />
                <label htmlFor="last-name"></label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" id="last-name" name="last-name" />
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email" id="email" name="email" />
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
            <p>Do you have a account?</p>
            <button className="link-btn-two" onClick={() => props.onFormSwitch('register')}>Log in</button>
        </div>
    )
}