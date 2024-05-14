import React from 'react';
import { render } from '@testing-library/react';
import EpisodesList from './EpisodesList';
import '@testing-library/jest-dom';

describe('EpisodesList component', () => {
  const episodes = [
    { id: 1, title: 'Episode 1', description: 'Description of Episode 1' },
    { id: 2, title: 'Episode 2', description: 'Description of Episode 2' },
    { id: 3, title: 'Episode 3', description: 'Description of Episode 3' },
  ];

  it('should render EpisodesList component', () => {
    render(<EpisodesList episodes={episodes} />);
  });
});