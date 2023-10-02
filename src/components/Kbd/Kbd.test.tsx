import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Kbd } from './Kbd';

import styles from './Kbd.module.scss';

describe('Kbd', () => {
  it('renders Kbd component with default props', () => {
    const { getByTestId } = render(<Kbd data-testid="kbd">C</Kbd>);

    const kbdElement = getByTestId('kbd');

    expect(kbdElement).toBeInTheDocument();
    expect(kbdElement).toHaveClass(styles.kbd);
    expect(kbdElement).toHaveClass(styles.flat);
    expect(kbdElement).toHaveClass('md text body on-background-variant');
  });

  it('renders Kbd component with `command` glyph prop', () => {
    const { getByTestId } = render(
      <Kbd glyph="command" data-testid="kbd-glyph" />
    );

    const kbdGlyphElement = getByTestId('kbd-glyph');

    expect(kbdGlyphElement).toBeInTheDocument();
    expect(kbdGlyphElement).toHaveTextContent('⌘');
  });

  it('renders Kbd component with an array of glyphs', () => {
    const { getByTestId } = render(
      <Kbd glyph={['command', 'option']} data-testid="kbd-glyphs-array">
        K
      </Kbd>
    );

    const kbdGlyphsElement = getByTestId('kbd-glyphs-array');

    expect(kbdGlyphsElement).toBeInTheDocument();
    expect(kbdGlyphsElement).toHaveTextContent('⌘⌥K');
  });

  it('renders `dimensional` Kbd component', () => {
    const text = 'Ctrl + C';
    const { getByText } = render(<Kbd type="dimensional">{text}</Kbd>);

    const kbdElement = getByText(text);

    expect(kbdElement).toBeInTheDocument();
    expect(kbdElement).toHaveClass(styles.kbd);
    expect(kbdElement).toHaveClass(styles.dimensional);
    expect(kbdElement).not.toHaveClass(styles.flat);
  });

  it('renders Kbd component with empty glyph prop', () => {
    const text = 'Space';
    // @ts-expect-error
    const { getByText } = render(<Kbd glyph=""> {text} </Kbd>);

    const kbdElement = getByText(text);

    // Assert
    expect(kbdElement).toBeInTheDocument();
  });

  it('renders Kbd component with invalid glyph prop', () => {
    const { getByTestId } = render(
      // @ts-expect-error
      <Kbd glyph="invalid" data-testid="invalid-kbd" />
    );

    const kbdGlyphsElement = getByTestId('invalid-kbd');

    expect(kbdGlyphsElement).toBeInTheDocument();
  });

  it('renders Kbd component with custom className prop', () => {
    const customClassName = 'custom-class';
    const { getByText, getByTestId } = render(
      <Kbd
        className={customClassName}
        glyph="capsLock"
        data-testid="kbd-custom-classname"
      />
    );

    const glyphElement = getByText('⇪');
    const kbdElement = getByTestId('kbd-custom-classname');

    expect(glyphElement).toBeInTheDocument();
    expect(kbdElement).toBeInTheDocument();
    expect(kbdElement).toHaveClass(styles.kbd);
    expect(kbdElement).toHaveClass(styles.flat);
    expect(kbdElement).toHaveClass(customClassName);
  });

  it('renders Kbd component with `on-background-low` color', () => {
    const { getByTestId } = render(
      <Kbd color="on-background-low" data-testid="kbd-color" />
    );

    const kbdElement = getByTestId('kbd-color');

    expect(kbdElement).toBeInTheDocument();
    expect(kbdElement).toHaveClass(styles.kbd);
    expect(kbdElement).toHaveClass('on-background-low');
  });

  it('renders Kbd component with variant prop set to inherit', () => {
    const style = { color: 'green' };
    const { getByText } = render(<Kbd style={style}>Alt</Kbd>);

    const kbdElement = getByText('Alt');

    expect(kbdElement).toBeInTheDocument();
    expect(kbdElement).toHaveStyle(style);
  });
});
