import classNames from 'classnames';

import puiLogo from '@/public/pui-logo.svg';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <svg
      className={classNames(styles.logo, className)}
      aria-hidden={true}
      role="presentation"
      height={puiLogo.height}
      width={puiLogo.width}
    >
      <use href={`${puiLogo.src}#pui-logo`} />
    </svg>
  );
}

export default Logo;
