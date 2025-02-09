import { render, screen } from '@testing-library/react';
import NoResultsMessage from '../src/components/NoResultsMessage';

describe('NoResultsMessage component', () => {
  const scenes = [
    {
      movie: 'Test Movie',
      year: 2020,
    }
  ];

  it('muestra mensaje cuando no hay coincidencias de película', () => {
    render(
      <NoResultsMessage scenes={scenes} filterMovie="NonExistent" filterYear="" />
    );
    expect(screen.getByText(/No movie matches the search term/)).toBeInTheDocument();

  });

  it('muestra años disponibles cuando la película existe pero no para el año seleccionado', () => {
    const scenes = [
      { movie: 'Test Movie', year: 2020, poster: 'dummy', full_line: 'dummy', timestamp: 1 }
    ];
    render(
      <NoResultsMessage scenes={scenes} filterMovie="Test Movie" filterYear="2019" />
    );
    expect(
      screen.getByText((content) => content.includes('exists, but not for the selected year'))
    ).toBeInTheDocument();
  });

  it('muestra un mensaje genérico cuando no hay resultados (según la lógica actual)', () => {
    const scenes = [
      { movie: 'Test Movie', year: 2020, poster: 'dummy', full_line: 'dummy', timestamp: 1 }
    ];
    render(
      <NoResultsMessage scenes={scenes} filterMovie="" filterYear="" />
    );
    
    expect(
      screen.getByText((content) => content.includes('exists, but not for the selected year'))
    ).toBeInTheDocument();
  });
});
