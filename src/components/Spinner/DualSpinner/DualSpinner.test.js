import { createRef } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { DualSpinner } from './DualSpinner';

describe('DualSpinner', () => {
  it('renders default component', () => {
    render(<DualSpinner />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveClass('dual-spinner');
  });

  it('renders in xl size', () => {
    render(<DualSpinner size="xl" />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveClass('dual-spinner xl');
  });

  it('renders with custom classNames', () => {
    const className = 'new-style custom-class';
    render(<DualSpinner className={className} />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveClass(className);
  });

  it('applies the custom speed', () => {
    render(<DualSpinner speed="2s" />);

    const spinner = screen.getByRole('status');

    expect(spinner.children[0]).toHaveStyle({ 'animation-duration': '2s' });
  });

  it('applies additional inline style', () => {
    render(<DualSpinner style={{ color: 'green' }} />);

    const spinner = screen.getByRole('status');

    expect(spinner.children[0]).toHaveStyle('color: green');
  });

  it('forwards ref to the underlying span element', () => {
    const ref = createRef();
    render(<DualSpinner ref={ref} data-testid="dual-spinner" />);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current).toHaveAttribute('data-testid', 'dual-spinner');
  });
});
