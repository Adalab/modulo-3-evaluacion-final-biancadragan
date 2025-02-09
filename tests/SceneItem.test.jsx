import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SceneItem from '../src/components/SceneItem';

describe('SceneItem component', () => {
  const scene = {
    movie: 'Test Movie',
    year: 2020,
    poster: 'https://example.com/poster.jpg',
    full_line: 'Test quote',
  };

  const sceneId = 'Test-Movie-2020-12345';

  it('debe renderizar la información de la escena', () => {
    render(
      <MemoryRouter>
        <SceneItem scene={scene} id={sceneId} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Test Movie - 2020/)).toBeInTheDocument();
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
    const image = screen.getByAltText(/Poster of Test Movie/);
    expect(image).toHaveAttribute('src', 'https://example.com/poster.jpg');
  });
});
