import { AvatarProps } from '../Avatar/Avatar.types';

export interface AvatarGroupProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Element and flexbox direction
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir | MDN | dir - HTML}
   */
  direction?: 'ltr' | 'rtl';
  /**
   * Maximum number of displayed avatars
   */
  max?: number;
  /**
   * Props for an avatar element that displays overflow counter
   */
  counterAvatarProps?: Omit<Partial<AvatarProps>, 'icon' | 'src' | 'fallback'>;
}
