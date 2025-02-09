import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../src/components/Filters';

describe('Filters component', () => {
  const mockOnFilterMovie = jest.fn();
  const mockOnFilterYear = jest.fn();
  const mockOnClearFilters = jest.fn();

  beforeEach(() => {
    render(
      <Filters
        filterMovie="test"
        filterYear="2020"
        onFilterMovie={mockOnFilterMovie}
        onFilterYear={mockOnFilterYear}
        uniqueYears={[2018, 2019, 2020]}
        onClearFilters={mockOnClearFilters}
      />
    );
  });

  it('muestra el input con el valor de filterMovie', () => {
    expect(screen.getByPlaceholderText('Filter by movie')).toHaveValue('test');
  });

  it('muestra el select con el valor de filterYear', () => {
    expect(screen.getByDisplayValue('2020')).toBeInTheDocument();
  });

  it('al hacer click en "Clear Filters" se llama a onClearFilters', () => {
    fireEvent.click(screen.getByText('Clear Filters'));
    expect(mockOnClearFilters).toHaveBeenCalled();
  });
});
