import { render, screen, fireEvent } from '@testing-library/react';
import LandingPage from '../src/pages/LandingPage';
import { MemoryRouter } from 'react-router-dom';

describe('LandingPage component', () => {
  const scenes = [
    {
      movie: 'Test Movie',
      year: 2020,
      poster: 'https://example.com/poster.jpg',
      full_line: 'Test quote',
      timestamp: 1,
      generatedId: 'Test-Movie-2020-1'
    }
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  it('muestra los filtros y la lista de escenas cuando hay datos', () => {
    render(
      <MemoryRouter>
        <LandingPage scenes={scenes} />
      </MemoryRouter>
    );
    // Verifica que los inputs de filtro estén en el documento
    expect(screen.getByPlaceholderText('Filter by movie')).toBeInTheDocument();
    expect(screen.getByText('Clear Filters')).toBeInTheDocument();
    // Verifica que se renderice la escena en la lista
    expect(screen.getByText(/Test Movie - 2020/)).toBeInTheDocument();
  });

  it('muestra un mensaje de "NoResultsMessage" cuando los filtros no coinciden', () => {
    render(
      <MemoryRouter>
        <LandingPage scenes={scenes} />
      </MemoryRouter>
    );
    const movieInput = screen.getByPlaceholderText('Filter by movie');
    fireEvent.change(movieInput, { target: { value: 'NonExistent' } });
    expect(screen.getByText(/No movie matches the search term/)).toBeInTheDocument();
  });
});
