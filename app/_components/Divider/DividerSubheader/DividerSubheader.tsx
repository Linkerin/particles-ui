import classNames from 'classnames';

import { SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './DividerSubheader.module.scss';

/** Separate component from Divider's subheader */
function DividerSubheader({ children, className, ...props }: SpanElementProps) {
  return (
    <span
      className={classNames(styles['divider-subheader'], className)}
      {...props}
    >
      {children}
    </span>
  );
}

export default DividerSubheader;
