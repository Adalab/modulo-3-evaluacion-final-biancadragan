import { render, screen } from '@testing-library/react';
import SceneList from '../src/components/SceneList';
import { MemoryRouter } from 'react-router-dom';

describe('SceneList component', () => {
  const scenes = [
    {
      movie: 'Movie A',
      year: 2020,
      poster: 'https://example.com/a.jpg',
      full_line: 'Quote A',
      timestamp: 1,
      generatedId: 'Movie-A-2020-1'
    },
    {
      movie: 'Movie B',
      year: 2021,
      poster: 'https://example.com/b.jpg',
      full_line: 'Quote B',
      timestamp: 2,
      generatedId: 'Movie-B-2021-2'
    },
  ];

  it('debe renderizar una lista de escenas', () => {
    render(
      <MemoryRouter>
        <SceneList scenes={scenes} />
      </MemoryRouter>
    );
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });
});
