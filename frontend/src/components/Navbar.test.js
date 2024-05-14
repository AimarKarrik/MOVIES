import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Navbar';
import '@testing-library/jest-dom';

describe('NavBar component', () => {
  it('should render Navbar with correct elements', async () => { 
    render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    const moviesElements = await screen.findAllByText('Movies');
    const tvShowsElements = await screen.findAllByText('TV Shows');
    const reviewsElements = await screen.findAllByText('Reviews');

    expect(moviesElements.length).toBeGreaterThan(0);
    expect(tvShowsElements.length).toBeGreaterThan(0);
    expect(reviewsElements.length).toBeGreaterThan(0);

    expect(screen.getByRole('button')).toHaveClass('btn-search');
    expect(screen.getByPlaceholderText('Type to Search...')).toBeInTheDocument();

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});