'use client';

import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconStack2 as StackIcon } from '@tabler/icons-react';
import Link from '@/app/_components/Link/Link';
import List from '@/app/_components/List/List';
import ListItem from '@/app/_components/List/ListItem/ListItem';
import ListItemIcon from '@/app/_components/List/ListItemIcon/ListItemIcon';
import ListItemInteractive from '@/app/_components/List/ListItemInteractive/ListItemInteractive';
import ListItemText from '@/app/_components/List/ListItemText/ListItemText';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

import linkOverlayStyles from '../../styles/util-classes/link-overlay.module.scss';

function ListDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        List Components
      </Heading>
      <Divider />
      <Heading variant="h6">Static lists</Heading>
      <Heading variant="subtitle-md">Base list</Heading>
      <List as="ul">
        <ListItem>
          <ListItemText primary="First item" secondary="Simple list example" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Second item" />
        </ListItem>
      </List>
      <Heading variant="subtitle-md">With icons</Heading>
      <List>
        <ListItem>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <ListItemText primary="First item" secondary="SVG icon" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbolIcon icon="language" />
          </ListItemIcon>
          <ListItemText
            primary="Second item"
            secondary="Material Symbol icon"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Third one-line item" />
        </ListItem>
        <ListItem inset>
          <ListItemText primary="Fourth item" secondary="With inset" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StackIcon />
          </ListItemIcon>
          <ListItemText primary="Fifth item" secondary="Tabler icon" />
        </ListItem>
      </List>
      <Heading variant="subtitle-md">With dividers</Heading>
      <List>
        <ListItem
          divider="middle"
          style={{ borderColor: 'var(--pui-tertiary)' }}
        >
          <ListItemText primary="Middle divider" secondary="Bottom" />
        </ListItem>
        <ListItem>
          <ListItemText primary="No dividers" />
        </ListItem>
        <ListItem divider="full" dividerPosition="both">
          <ListItemText primary="Full both dividers" />
        </ListItem>
        <ListItem>
          <ListItemText primary="No dividers" />
        </ListItem>
        <ListItem
          divider="inset"
          dividerPosition="both"
          style={{ borderColor: 'var(--pui-secondary)' }}
        >
          <ListItemText primary="Inset both dividers" />
        </ListItem>
        <ListItem>
          <ListItemText primary="No dividers" />
        </ListItem>
        <ListItem divider="inset" dividerPosition="top">
          <ListItemText primary="Inset top divider" />
        </ListItem>
        <ListItem divider="middle" dividerPosition="both">
          <ListItemText primary="Both middle dividers" />
        </ListItem>
        <ListItem divider="inset">
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Bottom inset divider" />
        </ListItem>
        <ListItem inset divider="full">
          <ListItemText
            primary="Bottom full divider"
            secondary="With inset element"
          />
        </ListItem>
      </List>
      <Heading variant="subtitle-md">Dense</Heading>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <ListItemText primary="First item" secondary="SVG icon" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Second one-line item" />
        </ListItem>
        <ListItem inset>
          <ListItemText primary="Third item" secondary="With inset" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fourth item" secondary="Ordinary" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StackIcon />
          </ListItemIcon>
          <ListItemText primary="Fifth item" secondary="Tabler icon" />
        </ListItem>
      </List>
      <Heading variant="subtitle-md">Without inline paddings</Heading>
      <List pdInline={false}>
        <ListItem>
          <ListItemText primary="First item" secondary="Simple list example" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Second item" />
        </ListItem>
      </List>
      <Divider />
      <Heading variant="h6">Interactive lists</Heading>
      <Heading variant="subtitle-md">Base list</Heading>
      <List>
        <ListItemInteractive
          onClick={e => {
            console.log('First item clicked');
          }}
        >
          <ListItemText primary="First item" secondary="Simple list example" />
        </ListItemInteractive>
        <ListItemInteractive
          onClick={e => {
            console.log('Second item clicked');
          }}
        >
          <ListItemText primary="Second item" />
        </ListItemInteractive>
      </List>
      <Heading variant="subtitle-md">With icons</Heading>
      <List>
        <ListItemInteractive>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <ListItemText primary="First item" secondary="SVG icon" />
        </ListItemInteractive>
        <ListItemInteractive
          selected
          onClick={e => {
            console.log('Selected item clicked');
          }}
        >
          <ListItemIcon>
            <MaterialSymbolIcon icon="language" />
          </ListItemIcon>
          <ListItemText
            primary="Second selected item"
            secondary="Material Symbol icon"
          />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemIcon>
            <MaterialSymbolIcon icon="local_taxi" />
          </ListItemIcon>
          <ListItemText primary="Third one-line item" />
        </ListItemInteractive>
        <ListItemInteractive
          disabled
          onClick={e => {
            console.log('Disabled item clicked');
          }}
        >
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Fourth disabled item" />
        </ListItemInteractive>
        <ListItemInteractive inset>
          <ListItemText primary="Fifth item" secondary="With inset" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemIcon>
            <StackIcon />
          </ListItemIcon>
          <ListItemText primary="Sixth item" secondary="Tabler icon" />
        </ListItemInteractive>
      </List>
      <Heading variant="subtitle-md">With dividers</Heading>
      <List>
        <ListItemInteractive divider="middle">
          <ListItemText primary="Middle divider" secondary="Bottom" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemText primary="No dividers" />
        </ListItemInteractive>
        <ListItemInteractive
          divider="full"
          dividerPosition="both"
          style={{ borderColor: 'var(--pui-primary)' }}
        >
          <ListItemText primary="Full both dividers" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemText primary="No dividers" />
        </ListItemInteractive>
        <ListItemInteractive divider="inset" dividerPosition="top">
          <ListItemText primary="Inset top divider" />
        </ListItemInteractive>
        <ListItemInteractive divider="inset">
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Bottom inset divider" />
        </ListItemInteractive>
      </List>
      <Heading variant="subtitle-md">Dense</Heading>
      <List dense>
        <ListItemInteractive>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <ListItemText primary="First item" secondary="SVG icon" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary="Second one-line item" />
        </ListItemInteractive>
        <ListItemInteractive inset>
          <ListItemText primary="Third item" secondary="With inset" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemText primary="Fourth ordinary item" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemIcon>
            <StackIcon />
          </ListItemIcon>
          <ListItemText primary="Fifth item" secondary="Tabler icon" />
        </ListItemInteractive>
      </List>
      <Heading variant="subtitle-md">Without inline paddings</Heading>
      <List pdInline={false}>
        <ListItemInteractive>
          <ListItemText primary="First item" secondary="Simple list example" />
        </ListItemInteractive>
        <ListItemInteractive>
          <ListItemText primary="Second item" />
        </ListItemInteractive>
      </List>
      <Heading variant="subtitle-md">With links</Heading>
      <List>
        <ListItemInteractive className={linkOverlayStyles.overlay}>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <Link href="/" overlay>
            Overlay link
          </Link>
        </ListItemInteractive>
        <ListItemInteractive className={linkOverlayStyles.overlay}>
          <ListItemIcon>
            <MaterialSymbolIcon icon="edit" />
          </ListItemIcon>
          <Link href="/" isExternal overlay>
            External link
          </Link>
        </ListItemInteractive>
        <ListItemInteractive className={linkOverlayStyles.overlay}>
          <ListItemIcon>
            <StackIcon />
          </ListItemIcon>
          <Link href="/" isExternal overlay>
            External link
          </Link>
        </ListItemInteractive>
        <ListItemInteractive>
          <Link href="/" color="inherit">
            Without overlay link
          </Link>
        </ListItemInteractive>
      </List>
    </DemoSection>
  );
}

export default ListDocsPage;
