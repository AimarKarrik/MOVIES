import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ScreenplayCard from './ScreenplayCard';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ScreenplayCard component', () => {
  const screenplay = {
    id: 1,
    image: 'path/to/image.jpg',
    title: 'Test Screenplay',
  };

  it('should render screenplay card correctly', () => {
    render(
      <Router>
        <ScreenplayCard screenplay={screenplay} />
      </Router>
    );

    const screenplayImage = screen.getByAltText('screenplayimage');
    expect(screenplayImage).toBeTruthy();

    const screenplayTitle = screen.getByText('Test Screenplay');
    expect(screenplayTitle).toBeTruthy();
  });

  it('should navigate to correct URL when clicked', () => {
    const navigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigate);

    render(
      <Router>
        <ScreenplayCard screenplay={screenplay} />
      </Router>
    );

    fireEvent.click(screen.getByAltText('screenplayimage'));
    expect(navigate).toHaveBeenCalledWith(`/screenplay/${screenplay.id}`);
  });
}); 
