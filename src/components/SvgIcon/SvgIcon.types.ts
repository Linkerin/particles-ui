export interface SvgIconProps
  extends Pick<React.ComponentPropsWithRef<'svg'>, 'ref'> {
  /**
   * HTML `class` attribute value
   */
  className?: React.SVGAttributes<SVGSVGElement>['className'];
  /**
   * SVG icon color
   */
  color?: React.SVGAttributes<SVGSVGElement>['color'];
  /**
   * icon `id` attribute value inside `svg` tag
   */
  id: string;
  /**
   * WAI-ARIA Role
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles | MDN | WAI-ARIA Roles}
   */
  role?: React.AriaRole;
  /**
   * Icon side dimention (component's aspect ratio 1 / 1)
   */
  size?: string | number;
  /**
   * SVG icon URL
   */
  src: unknown;
  /**
   * `stroke-width` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width | MDN | stroke-width - SVG}
   */
  strokeWidth?: React.SVGAttributes<SVGSVGElement>['strokeWidth'];
}
