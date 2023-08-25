'use client';

import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconAtom2 as AtomIcon } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';
import IconButton from '@/app/_components/IconButton/IconButton';

function IconButtonDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        IconButton Component
      </Heading>
      <Divider />
      <Heading variant="h6">Variants</Heading>
      <DemoContainer>
        <IconButton aria-label="Globe text icon" icon={<GlobeIcon />} />
        <IconButton
          aria-label="Globe filled icon"
          icon={<GlobeIcon />}
          variant="filled"
          onClick={e => {
            console.log('IconButton clicked');
          }}
        />
        <IconButton
          aria-label="Globe outlined icon"
          icon={<GlobeIcon />}
          variant="outlined"
        />
        <IconButton
          aria-label="Globe soft icon"
          icon={<GlobeIcon />}
          variant="soft"
        />
        <IconButton
          aria-label="Globe elevated icon"
          icon={<GlobeIcon />}
          variant="elevated"
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Filled Colors</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="primary"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="tertiary"
        />
      </DemoContainer>
      <DemoContainer>
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="primary"
          isLoading
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          isLoading
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="tertiary"
          isLoading
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Disabled</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Globe text icon"
          icon={<GlobeIcon />}
          disabled
        />
        <IconButton
          aria-label="Globe filled icon"
          icon={<GlobeIcon />}
          variant="filled"
          disabled
        />
        <IconButton
          aria-label="Globe outlined icon"
          icon={<GlobeIcon />}
          variant="outlined"
          disabled
        />
        <IconButton
          aria-label="Globe soft icon"
          icon={<GlobeIcon />}
          variant="soft"
          disabled
        />
        <IconButton
          aria-label="Globe elevated icon"
          icon={<GlobeIcon />}
          variant="elevated"
          disabled
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Loading</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Globe text icon"
          icon={<GlobeIcon />}
          isLoading
        />
        <IconButton
          aria-label="Globe filled icon"
          icon={<GlobeIcon />}
          variant="filled"
          isLoading
        />
        <IconButton
          aria-label="Globe outlined icon"
          icon={<GlobeIcon />}
          variant="outlined"
          isLoading
        />
        <IconButton
          aria-label="Globe soft icon"
          icon={<GlobeIcon />}
          variant="soft"
          isLoading
        />
        <IconButton
          aria-label="Globe elevated icon"
          icon={<GlobeIcon />}
          variant="elevated"
          isLoading
        />
      </DemoContainer>
      <DemoContainer>
        <IconButton
          aria-label="Globe text icon"
          icon={<GlobeIcon />}
          isLoading
          noLoadingSpinner
        />
        <IconButton
          aria-label="Globe filled icon"
          icon={<GlobeIcon />}
          variant="filled"
          isLoading
          noLoadingSpinner
        />
        <IconButton
          aria-label="Globe outlined icon"
          icon={<GlobeIcon />}
          variant="outlined"
          isLoading
          noLoadingSpinner
        />
        <IconButton
          aria-label="Globe soft icon"
          icon={<GlobeIcon />}
          variant="soft"
          isLoading
          noLoadingSpinner
        />
        <IconButton
          aria-label="Globe elevated icon"
          icon={<GlobeIcon />}
          variant="elevated"
          isLoading
          noLoadingSpinner
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="none"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="xs"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="sm"
        />
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="md"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="lg"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="xl"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="full"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="filled"
          color="secondary"
          radius="round"
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <Heading as="h3" variant="subtitle-md">
        SvgIcon
      </Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="sm"
        />
        <IconButton
          aria-label="Medium globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="md"
        />
        <IconButton
          aria-label="Large globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="lg"
        />
        <IconButton
          aria-label="X-large globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="xl"
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        MaterialSymbolIcon
      </Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="soft"
          size="sm"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="soft"
          size="md"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="soft"
          size="lg"
        />
        <IconButton
          aria-label="X-large material icon"
          icon={<MaterialSymbolIcon icon="settings" />}
          variant="soft"
          size="xl"
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Tabler icon
      </Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="xs"
        />
        <IconButton
          aria-label="Small globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="sm"
        />
        <IconButton
          aria-label="Medium globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="md"
        />
        <IconButton
          aria-label="Large globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="lg"
        />
        <IconButton
          aria-label="X-large globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="xl"
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Loading
      </Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="xs"
          isLoading
        />
        <IconButton
          aria-label="Small globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="sm"
          isLoading
        />
        <IconButton
          aria-label="Medium globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="md"
          isLoading
        />
        <IconButton
          aria-label="Large globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="lg"
          isLoading
        />
        <IconButton
          aria-label="X-large globe icon"
          icon={<GlobeIcon />}
          variant="filled"
          size="xl"
          isLoading
        />
      </DemoContainer>
    </DemoSection>
  );
}

export default IconButtonDocsPage;
