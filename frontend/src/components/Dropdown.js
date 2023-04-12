import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../assets/images/profile1.jpg';
import '../styles/Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownMouseEnter = () => {
    setIsOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(function() {
      setIsOpen(false)
    }, 1000);
  };

  const handleSignOut = () => {
    localStorage.clear();
  };

  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <div
      className="dropdown"
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
      {loggedIn ? (
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
      ) : (
        <div className="auth-container">
          <NavLink className='navlink' to="/signup" onClick={() => localStorage.setItem('loggedIn', 'true')}>Sign Up</NavLink>
          <NavLink className='navlink' to="/login" onClick={() => localStorage.setItem('loggedIn', 'true')}>Log In</NavLink>
        </div>
      )}
      {isOpen && loggedIn && (
        <div className="dropdown-content">
          <NavLink className="dropdown-item" to="/profile">
            My Profile
          </NavLink>
          <button className="dropdown-item-two" onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;