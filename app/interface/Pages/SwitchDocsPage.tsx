'use client';

import CloseIcon from '@/app/_components/PuiIcons/CloseIcon/CloseIcon';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import Heading from '@/app/_components/Heading/Heading';
import { IconCheck, IconX } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';
import SvgIcon from '@/app/_components/SvgIcon/SvgIcon';
import Switch from '@/app/_components/Switch/Switch';

import TickSvg from '@/public/tick.svg';

function TickIcon() {
  return <SvgIcon src={TickSvg} id="tick" />;
}

function SwitchDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Switch Component
      </Heading>
      <Divider />
      <Heading variant="h6">Enabled</Heading>
      <DemoContainer>
        <Switch
          onChange={e => {
            console.log('Checked:', e.target.checked);
          }}
        />
        <Switch defaultChecked />
      </DemoContainer>
      <DemoContainer>
        <Switch unselectedIcon={<CloseIcon />} />
        <Switch defaultChecked selectedIcon={<TickIcon />} />
        <Switch unselectedIcon={<CloseIcon />} selectedIcon={<TickIcon />} />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Disabled</Heading>
      <DemoContainer>
        <Switch disabled />
        <Switch checked disabled />
      </DemoContainer>
      <DemoContainer>
        <Switch disabled unselectedIcon={<CloseIcon />} />
        <Switch checked disabled selectedIcon={<TickIcon />} />
      </DemoContainer>
      <Switch checked disabled labelText="Turn off" />
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer style={{ gap: 'var(--pui-gap-xl)' }}>
        <DemoContainer style={{ flexDirection: 'column' }}>
          <h3>Small</h3>
          <DemoContainer>
            <Switch size="sm" />
            <Switch size="sm" defaultChecked />
          </DemoContainer>
          <DemoContainer>
            <Switch size="sm" unselectedIcon={<CloseIcon />} />
            <Switch size="sm" defaultChecked selectedIcon={<TickIcon />} />
          </DemoContainer>
          <Switch size="sm" labelText="Turn off" />
        </DemoContainer>
        <DemoContainer style={{ flexDirection: 'column' }}>
          <h3>Medium</h3>
          <DemoContainer>
            <Switch size="md" />
            <Switch size="md" defaultChecked />
          </DemoContainer>
          <DemoContainer>
            <Switch size="md" unselectedIcon={<CloseIcon />} />
            <Switch size="md" defaultChecked selectedIcon={<TickIcon />} />
          </DemoContainer>
          <Switch size="md" labelText="Turn off" />
        </DemoContainer>
        <DemoContainer style={{ flexDirection: 'column' }}>
          <h3>Large</h3>
          <DemoContainer>
            <Switch size="lg" />
            <Switch size="lg" defaultChecked />
          </DemoContainer>
          <DemoContainer>
            <Switch size="lg" unselectedIcon={<CloseIcon />} />
            <Switch size="lg" defaultChecked selectedIcon={<TickIcon />} />
          </DemoContainer>
          <Switch size="lg" labelText="Turn off" />
        </DemoContainer>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <DemoContainer>
        <Switch defaultChecked />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="tertiary" />
      </DemoContainer>
      <DemoContainer>
        <Switch defaultChecked selectedIcon={<TickIcon />} />
        <Switch defaultChecked selectedIcon={<TickIcon />} color="secondary" />
        <Switch defaultChecked selectedIcon={<TickIcon />} color="tertiary" />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Other icons</Heading>
      <Heading as="h3" variant="subtitle-md">
        Material symbol icons
      </Heading>
      <DemoContainer>
        <Switch
          defaultChecked
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="sm"
        />
        <Switch
          defaultChecked
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="md"
          disabled
        />
        <Switch
          defaultChecked
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="lg"
        />
      </DemoContainer>
      <DemoContainer>
        <Switch
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="sm"
        />
        <Switch
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="md"
          disabled
        />
        <Switch
          unselectedIcon={<MaterialSymbolIcon icon="close" />}
          selectedIcon={<MaterialSymbolIcon icon="done" />}
          size="lg"
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Tabler icons
      </Heading>
      <DemoContainer>
        <Switch
          defaultChecked
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="sm"
        />
        <Switch
          defaultChecked
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="md"
          disabled
        />
        <Switch
          defaultChecked
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="lg"
        />
      </DemoContainer>
      <DemoContainer>
        <Switch
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="sm"
        />
        <Switch
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="md"
          disabled
        />
        <Switch
          unselectedIcon={<IconX />}
          selectedIcon={<IconCheck />}
          size="lg"
        />
      </DemoContainer>
    </DemoSection>
  );
}

export default SwitchDocsPage;
