import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter as Router, useNavigate } from 'react-router-dom';
import Signup from './Signup';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Signup component', () => {
  it('should handle form submission correctly', async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <Router>
        <Signup />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'Juri' } });
    fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Mets' } });
    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'juri.mets@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

    fireEvent.click(screen.getByRole('button', { name: 'Sign up' }));

    await waitFor(() => {
      expect(screen.queryByText('Please fill out all fields.')).toBeNull();
    });

    expect(navigate).toHaveBeenCalledWith('/Login');
  });
});