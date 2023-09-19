'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Link } from '@/lib/components/Link/Link';
import { List } from '@/lib/components/List/List';
import { ListItemInteractive } from '@/lib/components/List/ListItemInteractive/ListItemInteractive';

import linkOverlayStyle from '../../../lib/styles/util-classes/link-overlay.module.scss';
import styles from './Nav.module.scss';

const components = [
  { name: 'Alert', link: 'alert' },
  { name: 'Avatar', link: 'avatar' },
  { name: 'Badge', link: 'badge' },
  { name: 'Button', link: 'button' },
  { name: 'Chip', link: 'chip' },
  { name: 'Card', link: 'card' },
  { name: 'Divider', link: 'divider' },
  { name: 'FloatingButton', link: 'floating-button' },
  { name: 'Heading', link: 'heading' },
  { name: 'IconButton', link: 'icon-button' },
  { name: 'Image', link: 'image' },
  { name: 'Kbd', link: 'kbd' },
  { name: 'Link', link: 'link' },
  { name: 'List', link: 'list' },
  { name: 'MaterialSymbolIcon', link: 'material-symbol-icon' },
  { name: 'Palette', link: 'palette' },
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
          className={linkOverlayStyle.overlay}
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
            className={linkOverlayStyle.overlay}
            selected={pathname === `/docs/components/${component.link}`}
            tabIndex={-1}
          >
            <Link
              as={NextLink}
              href={`/docs/components/${component.link}`}
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
