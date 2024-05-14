import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ReviewContainer from './ReviewContainer';
import '@testing-library/jest-dom';

describe('ReviewContainer Component', () => {
  it('should render review form and submits new review', async () => {
    const mockReviews = [
      { id: 1, title: 'Good Movie', rating: 4, content: 'Enjoyed watching it.' },
      { id: 2, title: 'Excellent Film', rating: 5, content: 'Highly recommended.' },
    ];

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    render(<ReviewContainer reviews={mockReviews} screenplayId="123" />);

    const titleInput = screen.getByLabelText('Title');
    const ratingInput = screen.getByLabelText('Rating');
    const contentInput = screen.getByLabelText('Content');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(titleInput, { target: { value: 'Awesome Movie' } });
    fireEvent.change(ratingInput, { target: { value: 5 } });
    fireEvent.change(contentInput, { target: { value: 'One of the best movies I have ever seen.' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          title: 'Awesome Movie',
          rating: 5,
          content: 'One of the best movies I have ever seen.',
          screenplayId: 123
        }),
      });
    });

    global.fetch.mockRestore();
  });
});