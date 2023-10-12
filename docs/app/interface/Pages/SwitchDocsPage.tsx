'use client';
import { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';

import { CloseIcon } from '@snipshot/particles';
import {
  Divider,
  Heading,
  MaterialSymbolIcon,
  Switch,
  SwitchProps,
  SvgIcon
} from '../../../../src';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';

import TickSvg from '@/public/tick.svg';

const colors: Array<SwitchProps['color']> = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error',
  'uncolored'
];

function TickIcon() {
  return <SvgIcon src={TickSvg.src} id="tick" />;
}

function SwitchDocsPage() {
  const [switchIsChecked, setSwitchIsChecked] = useState(false);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('Checked:', e.target.checked);
    setSwitchIsChecked(e.target.checked);
  };

  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Switch Component
      </Heading>
      <Divider />
      <Heading variant="h6">Enabled</Heading>
      <DemoContainer>
        <Switch checked={switchIsChecked} onChange={changeHandler} />
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
      <Switch checked disabled labelElement="Turn off" />
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer style={{ gap: 'var(--pui-gap-xl)', flexWrap: 'wrap' }}>
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
          <Switch size="sm" labelElement="Turn off" />
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
          <Switch size="md" labelElement="Turn off" labelPosition="right" />
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
          <Switch size="lg" labelElement="Turn off" />
        </DemoContainer>
        <DemoContainer style={{ flexDirection: 'column' }}>
          <h3>X-Large</h3>
          <DemoContainer>
            <Switch size="xl" />
            <Switch size="xl" defaultChecked />
          </DemoContainer>
          <DemoContainer>
            <Switch size="xl" unselectedIcon={<CloseIcon />} />
            <Switch size="xl" defaultChecked selectedIcon={<TickIcon />} />
          </DemoContainer>
          <Switch size="xl" labelElement="Turn off" />
        </DemoContainer>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <DemoContainer>
        {colors.map(color => (
          <Switch key={color} defaultChecked color={color} />
        ))}
      </DemoContainer>
      <DemoContainer>
        {colors.map(color => (
          <Switch
            key={color}
            defaultChecked
            color={color}
            selectedIcon={<TickIcon />}
          />
        ))}
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
