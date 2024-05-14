import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeCard from './EpisodeCard';
import '@testing-library/jest-dom';

describe('EpisodeCard component', () => {
  const episode = {
    id: 1,
    title: 'Episode Title',
    description: 'Episode Description',
  };

  it('should render episode details correctly', () => {
    render(<EpisodeCard episode={episode} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Episode Title')).toBeInTheDocument();
    expect(screen.getByText('Episode Description')).toBeInTheDocument();
  });

  it('should render episode thumbnail', () => {
    render(<EpisodeCard episode={episode} />);
    
    expect(screen.getByTestId('episode-thumbnail')).toBeInTheDocument();
  });
});