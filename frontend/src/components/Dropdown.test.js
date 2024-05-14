import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from './Dropdown';
import '@testing-library/jest-dom';

describe('Dropdown component', () => {
  it('should render Dropdown component', () => {
    render(
      <Router>
        <Dropdown />
      </Router>
    );
  });

  it('should show sign-up and log-in links if not logged in', () => {
    render(
      <Router>
        <Dropdown />
      </Router>
    );
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  it('should show profile picture if logged in', () => {
    localStorage.setItem('loggedIn', 'true');
    render(
      <Router>
        <Dropdown />
      </Router>
    );
    expect(screen.getByAltText('profile')).toBeInTheDocument();
  });

  it('should clear local storage when logging out', async () => {
    localStorage.setItem('loggedIn', 'true');
    render(
      <Router>
        <Dropdown />
      </Router>
    );
    fireEvent.mouseEnter(screen.getByAltText('profile'));
    fireEvent.click(screen.getByText('Log Out'));
    await waitFor(() => {
      expect(localStorage.getItem('loggedIn')).toBeNull();
    });
  });
});