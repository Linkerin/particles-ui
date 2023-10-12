import { Meta, StoryObj } from '@storybook/react';
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript
} from '@tabler/icons-react';

import { List } from './List';
import { listDefaultProps } from './List.defaults';
import { ListItem } from './ListItem/ListItem';
import { ListItemInteractive } from './ListItemInteractive/ListItemInteractive';
import { ListItemIcon } from './ListItemIcon/ListItemIcon';
import { ListItemText } from './ListItemText/ListItemText';

const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  args: { ...listDefaultProps, style: { width: 'max(100px, 25vw)' } }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <List {...args}>
      <ListItem>
        <ListItemText primary="Superman" secondary="The Eminem Show · 2002" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mockingbird" secondary="Encore · 2004" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Not Afraid" secondary="Recovery · 2010" />
      </ListItem>
    </List>
  )
};

export const Dense: Story = {
  args: {
    as: 'ul',
    dense: true
  },
  render: args => (
    <List {...args}>
      <ListItem>
        <ListItemText primary="Superman" secondary="The Eminem Show · 2002" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mockingbird" secondary="Encore · 2004" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Not Afraid" secondary="Recovery · 2010" />
      </ListItem>
    </List>
  )
};

export const WithDividers: Story = {
  args: {
    as: 'ul',
    dense: true
  },
  render: args => (
    <List {...args}>
      <ListItem divider="inset" dividerPosition="bottom">
        <ListItemText primary="Superman" secondary="The Eminem Show · 2002" />
      </ListItem>
      <ListItem divider="inset" dividerPosition="bottom">
        <ListItemText primary="Mockingbird" secondary="Encore · 2004" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Not Afraid" secondary="Recovery · 2010" />
      </ListItem>
    </List>
  )
};

export const WithIcons: Story = {
  render: args => (
    <List {...args}>
      <ListItem>
        <ListItemIcon>
          <IconBrandHtml5 />
        </ListItemIcon>
        <ListItemText
          primary="HTML"
          primaryProps={{ size: 'sm' }}
          secondary="HyperText Markup Language"
          secondaryProps={{ size: 'sm' }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <IconBrandCss3 />
        </ListItemIcon>
        <ListItemText
          primary="CSS"
          primaryProps={{ size: 'sm' }}
          secondary="Cascading Style Sheets"
          secondaryProps={{ size: 'sm' }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <IconBrandJavascript />
        </ListItemIcon>
        <ListItemText
          primary="JS"
          primaryProps={{ size: 'sm' }}
          secondary="JavaScript"
          secondaryProps={{ size: 'sm' }}
        />
      </ListItem>
      <ListItem inset={true}>
        <ListItemText
          primary="No icon"
          primaryProps={{ size: 'sm' }}
          secondary="Inset for proper positioning"
          secondaryProps={{ size: 'sm' }}
        />
      </ListItem>
    </List>
  )
};

export const InteractiveList: Story = {
  args: {
    as: 'ul',
    dense: true
  },
  render: args => (
    <List {...args}>
      <ListItemInteractive divider="full" dividerPosition="bottom">
        <ListItemText primary="Superman" secondary="The Eminem Show · 2002" />
      </ListItemInteractive>
      <ListItemInteractive
        divider="full"
        dividerPosition="bottom"
        selected={true}
      >
        <ListItemText
          primary="Lose Yourself"
          secondary="8 Mile · 2004 · Selected"
        />
      </ListItemInteractive>
      <ListItemInteractive divider="full" dividerPosition="bottom">
        <ListItemText primary="Mockingbird" secondary="Encore · 2004" />
      </ListItemInteractive>
      <ListItemInteractive divider="full" dividerPosition="bottom">
        <ListItemText primary="Not Afraid" secondary="Recovery · 2010" />
      </ListItemInteractive>
      <ListItemInteractive disabled={true}>
        <ListItemText primary="Venom" secondary="Disabled" />
      </ListItemInteractive>
    </List>
  )
};
