import classNames from 'classnames';

import styles from './DividerSubheader.module.scss';

function DividerSubheader({
  children,
  className,
  ...props
}: React.ComponentProps<'span'>) {
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
