import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import '@testing-library/jest-dom';

describe('ReviewCard Component', () => {
  it('renders review card with user name and review details', async () => {
    const mockReview = {
      userId: 123,
      title: 'Fantastic',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const mockUser = {
      id: 123,
      name: 'Juri Mets',
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ user: mockUser }),
      })
    );

    render(
      <MemoryRouter>
        <ReviewCard review={mockReview} />
      </MemoryRouter>
    );

    expect(await screen.findByText('Fantastic')).toBeInTheDocument();
    expect(await screen.findByText('Juri Mets')).toBeInTheDocument();
    expect(await screen.findByText('Rating: 5')).toBeInTheDocument();
    expect(await screen.findByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});