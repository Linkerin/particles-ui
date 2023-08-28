import { forwardRef } from 'react';
import classNames from 'classnames';

import { PuiColorNames, PuiRadius, PuiSize } from '@/app/_lib/types';
import { ImgElementProps, SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Avatar.module.scss';

const generateInitials = (name?: string) => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  const splitted = name.toUpperCase().split(' ');
  const initials = splitted.reduce((acc, currValue) => acc + currValue[0], '');

  return initials.slice(0, 2);
};

type AvatarContentProps =
  | {
      icon?: React.ReactElement;
      iconLabel: React.AriaAttributes['aria-label'];
      src?: undefined;
      alt?: ImgElementProps['alt'];
    }
  | {
      src?: ImgElementProps['src'];
      alt: ImgElementProps['alt'];
      icon?: undefined;
      iconLabel?: undefined;
    };

interface AvatarBaseProps extends Omit<ImgElementProps, 'ref' | 'src' | 'alt'> {
  bordered?: boolean;
  color?: PuiColorNames;
  disabled?: boolean;
  icon?: React.ReactElement;
  name?: string;
  radius?: PuiRadius;
  size?: PuiSize | 'xxl';
  spanWrapperProps?: SpanElementProps;
}

export type AvatarProps = AvatarBaseProps & AvatarContentProps;

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    className,
    alt,
    disabled,
    src,
    bordered,
    icon,
    iconLabel,
    name,
    spanWrapperProps,
    color = 'primary',
    radius = 'full',
    size = 'md',
    ...props
  },
  ref
) {
  return (
    <span
      ref={ref}
      className={classNames(
        styles.avatar,
        styles[size],
        { [styles[color]]: !disabled && color !== 'uncolored' },
        radiusStyles[radius],
        { [styles.bordered]: bordered },
        { [styles.disabled]: disabled }
      )}
      aria-disabled={disabled}
      aria-label={
        !!icon && !!iconLabel ? iconLabel : !src && name ? name : undefined
      }
      {...spanWrapperProps}
    >
      {!!icon && !src && icon}
      {!icon && !!src && (
        <img
          alt={alt}
          src={src}
          className={classNames(
            { [styles[`radius-${radius}`]]: bordered },
            className
          )}
          {...props}
        />
      )}
      {!src && !icon && name && generateInitials(name)}
    </span>
  );
});

export default Avatar;
