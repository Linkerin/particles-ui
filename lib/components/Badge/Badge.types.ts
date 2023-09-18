import {
  BadgeInlineBaseProps,
  BadgeInlineProps
} from '../BadgeInline/BadgeInline.types';
import { PuiAsProp } from '../../lib/types';

interface BadgeSelfProps {
  /**
   * Horizontal position (works when `inline` = `false`)
   */
  horizontal?: 'left' | 'right';
  /**
   * Vertical position (works when `inline` = `false`)
   */
  vertical?: 'top' | 'bottom';
  /**
   * Shape of the underlying component
   */
  shape?: 'circle' | 'rectangle';
}

export type BadgeBaseProps = BadgeInlineBaseProps & BadgeSelfProps;

export type BadgeProps = BadgeSelfProps & PuiAsProp & BadgeInlineProps;
