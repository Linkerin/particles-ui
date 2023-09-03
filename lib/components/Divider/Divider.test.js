import { createRef } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Divider from './Divider';

describe('DualSpinner', () => {
  it('applies the horizontal orientation by default', () => {
    render(<Divider />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('horizontal');
    expect(divider).not.toHaveClass('vertical');
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('applies the vertical orientation', () => {
    render(<Divider orientation="vertical" />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('vertical');
    expect(divider).not.toHaveClass('horizontal');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('applies the inset variant for horizontal orientation', () => {
    render(<Divider variant="inset" />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('inset');
    expect(divider).not.toHaveClass('middle');
  });

  it('applies the middle variant for vertical orientation', () => {
    render(<Divider variant="middle" orientation="vertical" />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('middle vertical');
    expect(divider).not.toHaveClass('inset');
  });

  it('renders with custom classNames', () => {
    const className = 'new-style custom-class';
    render(<Divider className={className} />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass(className);
  });

  it('renders subheader with custom className', async () => {
    const subheaderClassName = 'custom-subheader';

    render(
      <Divider
        subheader="Test subheader"
        subheaderClassName={subheaderClassName}
      />
    );

    await waitFor(() => {
      const divider = screen.getByRole('separator');
      const subheader = screen.getByText('Test subheader');

      expect(divider).toBeInstanceOf(HTMLHRElement);
      expect(subheader).toBeInstanceOf(HTMLSpanElement);
      expect(subheader).toHaveClass(subheaderClassName);
    });
  });

  it('forwards ref to the underlying span element', () => {
    const ref = createRef();
    render(<Divider ref={ref} data-testid="divider" />);

    expect(ref.current).toBeInstanceOf(HTMLHRElement);
    expect(ref.current).toHaveAttribute('data-testid', 'divider');
  });
});
