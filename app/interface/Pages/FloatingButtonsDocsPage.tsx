'use client';

import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import { Divider } from '@/src/components/Divider/Divider';
import { FloatingButton } from '@/src/components/FloatingButton/FloatingButton';
import GlobeIcon from '../GlobeIcon';
import { Heading } from '@/src/components/Heading/Heading';
import { IconMessage } from '@tabler/icons-react';
import { MaterialSymbolIcon } from '@/src/components/MaterialSymbolIcon/MaterialSymbolIcon';

function FloatingButtonsDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        FloatingButton Component
      </Heading>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <Heading as="h3" variant="subtitle-md">
        Primary
      </Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button with onClick callback"
          onClick={() => {
            console.log('Clicked floating button');
          }}
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton aria-label="Floating button" title="Floating button">
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton aria-label="Floating button" title="Floating button">
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Secondary
      </Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="secondary"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="secondary"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="secondary"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="secondary"
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Tertiary
      </Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="tertiary"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="tertiary"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="tertiary"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="tertiary"
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Background
      </Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        None
      </Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="uncolored"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="uncolored"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="uncolored"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="uncolored"
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Lowered</Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          lowered
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          lowered
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          lowered
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          lowered
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          lowered
          isLoading
          loadingText="Primary..."
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          lowered
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          lowered
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          lowered
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          lowered
          disabled
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          color="background"
          lowered
          isLoading
          loadingText="Surface..."
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Loading</Heading>
      <DemoContainer>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          isLoading
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          title="Floating button"
          isLoading
          loadingSpinner={false}
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          aria-label="Floating button"
          isLoading
          loadingText="Loading..."
          title="Floating button"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          isLoading
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          isLoading
          loadingSpinner={false}
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          isLoading
          loadingText="Loading..."
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="tertiary"
          isLoading
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="tertiary"
          isLoading
          loadingSpinner={false}
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="tertiary"
          isLoading
          loadingText="Loading..."
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="background"
          isLoading
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="background"
          isLoading
          loadingSpinner={false}
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="background"
          isLoading
          loadingText="Loading..."
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="none"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="xs"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="sm"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="md"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="lg"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="xl"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="full"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          color="secondary"
          radius="round"
        >
          <MaterialSymbolIcon icon="add" />
        </FloatingButton>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <Heading as="h3" variant="subtitle-md">
        Small
      </Heading>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="sm"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="sm"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Tabler icon Floating button"
          aria-label="Tabler icon Floating button"
          size="sm"
        >
          <IconMessage />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="sm"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="sm"
        >
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="sm"
          isLoading
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Medium
      </Heading>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="md"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="md"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Tabler icon Floating button"
          aria-label="Tabler icon Floating button"
          size="md"
        >
          <IconMessage />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="md"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="md"
        >
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="md"
          isLoading
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Large
      </Heading>
      <DemoContainer>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="lg"
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="lg"
        >
          <GlobeIcon />
        </FloatingButton>
        <FloatingButton
          title="Tabler icon Floating button"
          aria-label="Tabler icon Floating button"
          size="lg"
        >
          <IconMessage />
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="lg"
        >
          <MaterialSymbolIcon icon="edit" />
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="lg"
        >
          Compose
        </FloatingButton>
        <FloatingButton
          title="Floating button"
          aria-label="Floating button"
          size="lg"
          isLoading
        >
          <MaterialSymbolIcon icon="edit" />
        </FloatingButton>
      </DemoContainer>
    </DemoSection>
  );
}

export default FloatingButtonsDocsPage;
