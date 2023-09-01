import { forwardRef } from 'react';
import classNames from 'classnames';

import { ListItemTextProps } from './ListItemText.types';
import Text from '../../Text/Text';

import styles from './ListItemText.module.scss';

export type { ListItemTextProps };

/**
 * ListItemText component groups text inside a `List` component.
 * Uses `Text` components inside.
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  function ListItemText(
    {
      className,
      primary,
      primaryAs = 'span',
      primaryProps,
      secondary,
      secondaryAs = 'span',
      secondaryProps,
      ...props
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={classNames(styles['li-text'], className)}
        data-pui-component="li-text"
        {...props}
      >
        {primary && (
          <Text
            as={primaryAs}
            color="on-background"
            size="lg"
            {...primaryProps}
            data-pui-component="li-text-primary"
          >
            {primary}
          </Text>
        )}
        {secondary && (
          <Text
            as={secondaryAs}
            color="on-background-variant"
            size="md"
            data-pui-component="li-text-secondary"
            {...secondaryProps}
          >
            {secondary}
          </Text>
        )}
      </div>
    );
  }
);

export default ListItemText;
