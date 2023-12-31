import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './Button';
import styles from './Button.module.scss';

const tests = describe('Button component', () => {
  it('renders default button', () => {
    render(<Button>Test rendering</Button>);

    const btn = screen.getByRole('button', { name: /Test rendering/ });

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(
      styles.filled,
      styles.button,
      'pui-radius-md pui-outline-default'
    );
  });

  it('applies loading attributes "isLoading" prop is true', () => {
    render(
      <Button isLoading loadingText="Loading...">
        Loading Button
      </Button>
    );

    const btn = screen.getByText('Loading...');

    expect(btn).toHaveClass(styles.loading, styles.leftIcon);
    expect(btn).toHaveAttribute('aria-disabled', 'true');
    expect(btn.childNodes).toHaveLength(2);
  });

  it('applies "noLoadingSpinner" prop', () => {
    render(
      <Button isLoading loadingText="Loading..." loadingSpinner={false}>
        Loading Button
      </Button>
    );

    const btn = screen.getByText('Loading...');

    expect(btn).toHaveClass(styles.loading);
    expect(btn.childNodes).toHaveLength(1);
  });

  it('applies the "disabled" attribute when "disabled" prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const btn = screen.getByText('Disabled Button');

    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies the specified "size" class when "size" prop is provided', () => {
    render(<Button size="sm">Small Button</Button>);

    const btn = screen.getByText('Small Button');

    expect(btn).toHaveStyle({
      '--pui-btn-font-size': 'var(--pui-label-size-sm)'
    });
  });

  it('calls the onClick handler when the button is clicked', () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);

    const btn = screen.getByText('Click Me');

    fireEvent.click(btn);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClick handler when the button is disabled and clicked', () => {
    const onClickMock = vi.fn();
    render(
      <Button disabled onClick={onClickMock}>
        Disabled Button
      </Button>
    );

    const btn = screen.getByText('Disabled Button');
    fireEvent.click(btn);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('does not call the onClick handler when the button is in loading state and clicked', () => {
    const onClickMock = vi.fn();
    render(
      <Button isLoading loadingText="Loading..." onClick={onClickMock}>
        Loading Button
      </Button>
    );

    const btn = screen.getByText('Loading...');

    fireEvent.click(btn);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies custom styles when style prop is provided', () => {
    const customStyle = { backgroundColor: '#0ff', color: '#fff' };
    render(<Button style={customStyle}>Custom Styled Button</Button>);
    const buttonElement = screen.getByText('Custom Styled Button');
    expect(buttonElement).toHaveStyle(customStyle);
  });
});

export default tests;
