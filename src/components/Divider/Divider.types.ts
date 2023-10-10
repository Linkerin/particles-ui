import { DividerHrProps } from './DividerHr/DividerHr.types';
import { HeadingProps } from '../Heading/Heading.types';

export interface DividerProps extends DividerHrProps {
  /**
   * Divider's subheader text
   */
  subheader?: string;
  /**
   * Divider's subheader props
   */
  subheaderProps?: HeadingProps;
}
