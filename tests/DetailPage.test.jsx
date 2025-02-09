import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../src/pages/DetailPage';

describe('DetailPage component', () => {
  const scenes = [
    {
      movie: 'Test Movie',
      year: 2020,
      poster: 'https://example.com/poster.jpg',
      full_line: 'Test quote',
      director: 'Test Director',
      audio: 'https://example.com/audio.mp3',
      timestamp: 1,
      generatedId: 'Test-Movie-2020-1'
    }
  ];

  it('muestra el detalle de la escena si existe', () => {
    render(
      <MemoryRouter initialEntries={['/detail/Test-Movie-2020-1']}>
        <Routes>
          <Route path="detail/:id" element={<DetailPage scenes={scenes} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Test Movie - 2020/)).toBeInTheDocument();
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
  });

  it('muestra mensaje de error si la escena no existe', () => {
    render(
      <MemoryRouter initialEntries={['/detail/Nonexistent']}>
        <Routes>
          <Route path="detail/:id" element={<DetailPage scenes={scenes} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/The scene you are looking for does not exist/)).toBeInTheDocument();
  });
});
