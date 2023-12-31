import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Alert, AlertProps } from './Alert';
import { Button } from '../Button/Button';

import styles from './Alert.module.scss';
import buttonStyles from '../Button/Button.module.scss';

const alertData = {
  heading: 'We use cookies',
  text: 'Accept out Privacy and Cookie Policy'
};

const tests = describe('Alert component', () => {
  it('renders default Alert component', () => {
    const { getByRole } = render(
      <Alert heading={alertData.heading}>{alertData.text}</Alert>
    );

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass(
      styles.alert,
      styles.soft,
      styles.success,
      'pui-radius-sm'
    );
    expect(alert).toHaveTextContent(alertData.text);
    expect(alert).toHaveTextContent(alertData.heading);
    expect(alert.firstChild).toHaveClass(
      styles['alert-icon'],
      styles['with-heading']
    );
  });

  it('renders all variants alert', () => {
    const variants: Array<Exclude<AlertProps['variant'], undefined>> = [
      'soft',
      'outlined',
      'filled',
      'minimal'
    ];

    variants.forEach(variant => {
      const { getByLabelText } = render(
        <Alert variant={variant} heading={`Variant: ${variant}`} />
      );

      const alert = getByLabelText(`Variant: ${variant}`);
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass(styles[variant]);
    });
  });

  it('renders alert with all colors', () => {
    const colors: Array<Exclude<AlertProps['color'], undefined>> = [
      'success',
      'info',
      'warning',
      'error',
      'primary',
      'secondary',
      'tertiary'
    ];

    colors.forEach(color => {
      const { getByLabelText } = render(
        <Alert color={color} heading={`Color: ${color}`} />
      );

      const alert = getByLabelText(`Color: ${color}`);
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass(styles[color]);
    });
  });

  it('renders alert with all radius options', () => {
    const radiuses: Array<AlertProps['radius']> = [
      'none',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'full'
    ];

    radiuses.forEach(radius => {
      const { getByLabelText } = render(
        <Alert radius={radius} heading={`Radius: ${radius}`} />
      );

      const alert = getByLabelText(`Radius: ${radius}`);
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass(`pui-radius-${radius}`);
    });
  });

  it('renders alert without heading', () => {
    const { getByRole } = render(<Alert>{alertData.text}</Alert>);

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass(styles.alert);
    expect(alert).toHaveTextContent(alertData.text);
    expect(alert).not.toHaveTextContent(alertData.heading);
  });

  it('render alert with CloseButton', () => {
    const onCloseMock = vi.fn();

    const { getByLabelText } = render(
      <Alert heading={alertData.heading} onClose={onCloseMock}>
        {alertData.text}
      </Alert>
    );

    const alert = getByLabelText(alertData.heading);
    expect(alert).toBeInTheDocument();

    const closeButton = getByLabelText('Close alert message');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass(
      'pui-radius-round',
      buttonStyles.button,
      buttonStyles.text,
      buttonStyles.success
    );
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render Alert component with role prop set to status', () => {
    const { getByRole } = render(
      <Alert role="status" heading={alertData.heading} />
    );

    const alert = getByRole('status');
    expect(alert).toBeInTheDocument();
  });

  it('should render Alert component with role prop set to alertdialog', () => {
    const { getByRole } = render(
      <Alert role="alertdialog" heading={alertData.heading} />
    );

    const alert = getByRole('alertdialog');
    expect(alert).toBeInTheDocument();
  });

  it('should render Alert component with a custom class name', () => {
    const { getByRole } = render(<Alert className="custom-class" />);

    const alert = getByRole('alert');
    expect(alert).toHaveClass('custom-class');
  });

  it('should render Alert component with custom action element', () => {
    const onClickMock = vi.fn();

    const { queryByLabelText, getByRole, getByText } = render(
      <Alert
        heading={alertData.heading}
        actionElement={<Button onClick={onClickMock}>Undo</Button>}
      >
        {alertData.text}
      </Alert>
    );

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();

    const closeButton = queryByLabelText('Close alert message');
    expect(closeButton).not.toBeInTheDocument();

    const actionButton = getByText('Undo');
    fireEvent.click(actionButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render Alert component with custom action element and CloseButton', () => {
    const onClickMock = vi.fn();
    const onCloseMock = vi.fn();

    const { queryByLabelText, getByRole, getByText } = render(
      <Alert
        heading={alertData.heading}
        actionElement={<Button onClick={onClickMock}>Undo</Button>}
        onClose={onCloseMock}
      >
        {alertData.text}
      </Alert>
    );

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();

    const closeButton = queryByLabelText('Close alert message');
    expect(closeButton).toBeInTheDocument();
    if (closeButton) fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);

    const actionButton = getByText('Undo');
    fireEvent.click(actionButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

export default tests;
