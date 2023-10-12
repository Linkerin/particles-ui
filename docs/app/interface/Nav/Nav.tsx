'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Link, List, ListItemInteractive } from '../../../../src';

import styles from './Nav.module.scss';

const components = [
  { name: 'Alert', link: 'alert' },
  { name: 'Avatar', link: 'avatar' },
  { name: 'Badge', link: 'badge' },
  { name: 'Button', link: 'button' },
  { name: 'Card', link: 'card' },
  { name: 'Chip', link: 'chip' },
  { name: 'Divider', link: 'divider' },
  { name: 'FloatingButton', link: 'floating-button' },
  { name: 'Heading', link: 'heading' },
  { name: 'IconButton', link: 'icon-button' },
  { name: 'Image', link: 'image' },
  { name: 'Kbd', link: 'kbd' },
  { name: 'Link', link: 'link' },
  { name: 'List', link: 'list' },
  { name: 'MaterialSymbolIcon', link: 'material-symbol-icon' },
  { name: 'Skeleton', link: 'skeleton' },
  { name: 'Spinner', link: 'spinner' },
  { name: 'SvgIcon', link: 'svg-icon' },
  { name: 'Switch', link: 'switch' },
  { name: 'Text', link: 'text' }
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <List dense>
        <ListItemInteractive
          className="pui-link-overlay"
          tabIndex={-1}
          selected={pathname === '/'}
        >
          <Link as={NextLink} href="/" aria-label="Home page" overlay>
            Home
          </Link>
        </ListItemInteractive>
        {components.map(component => (
          <ListItemInteractive
            key={component.link}
            className="pui-link-overlay"
            selected={pathname === `/demo/components/${component.link}`}
            tabIndex={-1}
          >
            <Link
              as={NextLink}
              href={`/demo/components/${component.link}`}
              aria-label={`${component.name} component page`}
              overlay
            >
              {component.name}
            </Link>
          </ListItemInteractive>
        ))}
      </List>
    </nav>
  );
}

export default Nav;
