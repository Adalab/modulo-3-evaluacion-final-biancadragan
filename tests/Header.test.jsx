import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header component', () => {
  it('debe mostrar el título pasado por props', () => {
    render(<Header title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
