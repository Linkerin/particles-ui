import { DividerHrProps } from './DividerHr/DividerHr.types';

export interface DividerProps extends DividerHrProps {
  /**
   * Divider's subheader text
   */
  subheader?: string;
  /**
   * HTML `class` attribute value for the subheader
   */
  subheaderClassName?: string;
  /**
   * `ref` attribute value for the subheader
   */
  subheaderRef?: React.Ref<HTMLSpanElement>;
}
