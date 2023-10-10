import { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { DualSpinner } from './DualSpinner';

import styles from './DualSpinner.module.scss';

describe('DualSpinner', () => {
  it('renders default component', () => {
    render(<DualSpinner />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveClass(styles['dual-spinner']);
  });

  it('renders in xl size', () => {
    render(<DualSpinner size="xl" />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveClass(styles['dual-spinner'], styles['xl']);
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
    const style = { color: '#00ff00' };
    render(<DualSpinner style={style} />);

    const spinner = screen.getByRole('status');

    expect(spinner.children[0]).toHaveStyle(style);
  });

  it('forwards ref to the underlying span element', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<DualSpinner ref={ref} data-testid="dual-spinner" />);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current).toHaveAttribute('data-testid', 'dual-spinner');
  });
});
