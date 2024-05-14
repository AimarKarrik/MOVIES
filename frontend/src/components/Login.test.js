import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

describe('Login component', () => {
  it('should handle form submission correctly', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

    fireEvent.click(screen.getByText('Log In'));

    await waitFor(() => {
      expect(screen.queryByText('Please fill out all fields.')).toBeNull();
    });

    expect(window.location.pathname).toBe('/');
  });
});