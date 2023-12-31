import classNames from 'classnames';

import { Heading, HeadingProps } from '../../Heading/Heading';

import styles from './DividerSubheader.module.scss';

function DividerSubheader({
  children,
  className,
  as = 'span',
  color = 'on-background-low',
  variant = 'subtitle-sm',
  ...props
}: HeadingProps) {
  return (
    <Heading
      as={as}
      variant={variant}
      className={classNames(styles['divider-subheader'], className)}
      color={color}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default DividerSubheader;
