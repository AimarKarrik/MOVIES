import React from 'react';
import { render, screen } from '@testing-library/react';
import ScreenplayList from './ScreenplayList';

describe('ScreenplayList Component', () => {
  it('should render list title and screenplay cards', () => {
    const mockScreenplays = [
      { id: 1, title: 'Screenplay 1', author: 'Author 1' },
      { id: 2, title: 'Screenplay 2', author: 'Author 2' },
    ];
    const listTitle = 'My Screenplays';

    render(<ScreenplayList screenplays={mockScreenplays} listTitle={listTitle} />);

    const titleElement = screen.getByText(listTitle);
    expect(titleElement).toBeInTheDocument();

    mockScreenplays.forEach(screenplay => {
      const titleElement = screen.getByText(screenplay.title);
      const authorElement = screen.getByText(`Author: ${screenplay.author}`);
      expect(titleElement).toBeInTheDocument();
      expect(authorElement).toBeInTheDocument();
    });
  });
});