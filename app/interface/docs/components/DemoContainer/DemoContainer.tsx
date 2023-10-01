import classNames from 'classnames';

import { Box, BoxProps } from '../../../../../lib/components/Box/Box';

import styles from './DemoContainer.module.css';

function DemoContainer({ className, ...props }: BoxProps) {
  return (
    <Box
      className={classNames(styles['demo-container'], className)}
      {...props}
    />
  );
}

export default DemoContainer;
