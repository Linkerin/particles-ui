/**
 * `<div>` HTML element props type
 */
export type DivElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * `<h1> - <h6>` HTML element props type
 */
export type HeadingElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

/**
 * All other HTML elements' props (like `<section>`, `<header>`, etc.)
 */
export type HtmlElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

/**
 * `<input>` HTML element props type
 */
export type InputElementProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

/**
 * `<label>` HTML element props type
 */
export type LabelElementProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

/**
 * `<span>` HTML element props type
 */
export type SpanElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
