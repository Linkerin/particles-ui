'use client';

import { IconDeviceFloppy as SaveIcon } from '@tabler/icons-react';

import { Button, Divider, Heading, MaterialSymbolIcon } from '../../../../src';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import GlobeIcon from '../GlobeIcon';

function ButtonDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Button Component
      </Heading>
      <Divider />
      <Heading variant="h6">Primary color</Heading>
      <DemoContainer>
        <Button
          onClick={() => {
            console.log('Clicked');
          }}
        >
          Filled
        </Button>
        <Button variant="outlined" color={undefined}>
          Outlined
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="elevated">Elevated</Button>
      </DemoContainer>
      <DemoContainer>
        <Button leftIcon={<GlobeIcon />}>Filled</Button>
        <Button leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Secondary color</Heading>
      <DemoContainer>
        <Button color="secondary">Filled</Button>
        <Button color="secondary" variant="outlined">
          Outlined
        </Button>
        <Button color="secondary" variant="text" rightIcon={<GlobeIcon />}>
          Text
        </Button>
        <Button color="secondary" variant="soft">
          Soft
        </Button>
        <Button color="secondary" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="secondary" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="secondary" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="secondary" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="secondary" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="secondary" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Tertiary color</Heading>
      <DemoContainer>
        <Button color="tertiary">Filled</Button>
        <Button color="tertiary" variant="outlined">
          Outlined
        </Button>
        <Button color="tertiary" variant="text">
          Text
        </Button>
        <Button color="tertiary" variant="soft">
          Soft
        </Button>
        <Button color="tertiary" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="tertiary" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="tertiary" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="tertiary" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="tertiary" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="tertiary" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Success color</Heading>
      <DemoContainer>
        <Button color="success">Filled</Button>
        <Button color="success" variant="outlined">
          Outlined
        </Button>
        <Button color="success" variant="text">
          Text
        </Button>
        <Button color="success" variant="soft">
          Soft
        </Button>
        <Button color="success" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="success" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="success" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="success" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="success" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="success" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Info color</Heading>
      <DemoContainer>
        <Button color="info">Filled</Button>
        <Button color="info" variant="outlined">
          Outlined
        </Button>
        <Button color="info" variant="text">
          Text
        </Button>
        <Button color="info" variant="soft">
          Soft
        </Button>
        <Button color="info" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="info" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="info" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="info" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="info" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="info" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Error color</Heading>
      <DemoContainer>
        <Button color="error">Filled</Button>
        <Button color="error" variant="outlined">
          Outlined
        </Button>
        <Button color="error" variant="text">
          Text
        </Button>
        <Button color="error" variant="soft">
          Soft
        </Button>
        <Button color="error" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="error" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="error" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="error" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="error" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="error" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Heading variant="h6">Warning color</Heading>
      <DemoContainer>
        <Button color="warning">Filled</Button>
        <Button color="warning" variant="outlined">
          Outlined
        </Button>
        <Button color="warning" variant="text">
          Text
        </Button>
        <Button color="warning" variant="soft">
          Soft
        </Button>
        <Button color="warning" variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="warning" leftIcon={<GlobeIcon />}>
          Filled
        </Button>
        <Button color="warning" leftIcon={<GlobeIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color="warning" leftIcon={<GlobeIcon />} variant="text">
          Text
        </Button>
        <Button color="warning" leftIcon={<GlobeIcon />} variant="soft">
          Soft
        </Button>
        <Button color="warning" leftIcon={<GlobeIcon />} variant="elevated">
          Elevated
        </Button>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Loading</Heading>
      <DemoContainer>
        <Button isLoading loadingText="Loading...">
          Filled
        </Button>
        <Button variant="outlined" isLoading loadingText="Loading...">
          Outlined
        </Button>
        <Button variant="text" isLoading loadingText="Loading...">
          Text
        </Button>
        <Button variant="soft" isLoading loadingText="Loading...">
          Soft
        </Button>
        <Button variant="elevated" isLoading loadingText="Loading...">
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="secondary" isLoading loadingText="Loading...">
          Filled
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          isLoading
          loadingText="Loading..."
        >
          Outlined
        </Button>
        <Button
          color="secondary"
          variant="text"
          isLoading
          loadingText="Loading..."
        >
          Text
        </Button>
        <Button
          color="secondary"
          variant="soft"
          isLoading
          loadingText="Loading..."
        >
          Soft
        </Button>
        <Button
          color="secondary"
          variant="elevated"
          isLoading
          loadingText="Loading..."
        >
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button color="tertiary" isLoading loadingText="Loading...">
          Filled
        </Button>
        <Button
          color="tertiary"
          variant="outlined"
          isLoading
          loadingText="Loading..."
        >
          Outlined
        </Button>
        <Button
          color="tertiary"
          variant="text"
          isLoading
          loadingText="Loading..."
        >
          Text
        </Button>
        <Button
          color="tertiary"
          variant="soft"
          isLoading
          loadingText="Loading..."
        >
          Soft
        </Button>
        <Button
          color="tertiary"
          variant="elevated"
          isLoading
          loadingText="Loading..."
        >
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button size="xs" isLoading loadingText="X-small..." variant="elevated">
          X-small
        </Button>
        <Button size="sm" isLoading loadingText="Small..." variant="elevated">
          Small
        </Button>
        <Button size="md" isLoading loadingText="Medium..." variant="elevated">
          Medium
        </Button>
        <Button size="lg" isLoading loadingText="Large..." variant="elevated">
          Large
        </Button>
        <Button size="xl" isLoading loadingText="X-Large..." variant="elevated">
          X-Large
        </Button>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Disabled</Heading>
      <DemoContainer>
        <Button disabled>Filled</Button>
        <Button variant="outlined" disabled>
          Outlined
        </Button>
        <Button variant="text" disabled>
          Text
        </Button>
        <Button variant="soft" disabled>
          Soft
        </Button>
        <Button variant="elevated" disabled>
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button leftIcon={<GlobeIcon />} disabled>
          Filled
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="outlined" disabled>
          Outlined
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="text" disabled>
          Text
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="soft" disabled>
          Soft
        </Button>
        <Button leftIcon={<GlobeIcon />} variant="elevated" disabled>
          Elevated
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button rightIcon={<MaterialSymbolIcon icon="search" />} disabled>
          Filled
        </Button>
        <Button
          rightIcon={<MaterialSymbolIcon icon="search" />}
          variant="outlined"
          disabled
        >
          Outlined
        </Button>
        <Button
          rightIcon={<MaterialSymbolIcon icon="search" />}
          variant="text"
          disabled
        >
          Text
        </Button>
        <Button
          rightIcon={<MaterialSymbolIcon icon="search" />}
          variant="soft"
          disabled
        >
          Soft
        </Button>
        <Button
          rightIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          disabled
        >
          Elevated
        </Button>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <Button color="secondary" radius="none">
          None
        </Button>
        <Button color="secondary" radius="xs">
          X-small
        </Button>
        <Button color="secondary" radius="sm">
          Small
        </Button>
        <Button color="secondary" radius="md">
          Medium
        </Button>
        <Button color="secondary" radius="lg">
          Large
        </Button>
        <Button color="secondary" radius="xl">
          X-Large
        </Button>
        <Button color="secondary" radius="full">
          Full
        </Button>
        <Button color="secondary" radius="round">
          Round
        </Button>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Shrink</Heading>
      <DemoContainer>
        <Button shrinkOnPress>Shrink on press</Button>
        <Button shrinkOnPress shadowOnPress>
          Shrink with shadow
        </Button>
        <Button shrinkOnPress variant="elevated" color="tertiary">
          Shrink on press
        </Button>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer>
        <Button size="xs">X-small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">X-Large</Button>
      </DemoContainer>
      <DemoContainer>
        <Button leftIcon={<GlobeIcon />} size="xs">
          X-small
        </Button>
        <Button leftIcon={<GlobeIcon />} size="sm">
          Small
        </Button>
        <Button leftIcon={<GlobeIcon />} size="md">
          Medium
        </Button>
        <Button leftIcon={<GlobeIcon />} size="lg">
          Large
        </Button>
        <Button leftIcon={<GlobeIcon />} size="xl">
          X-Large
        </Button>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Dense
      </Heading>
      <DemoContainer>
        <Button size="xs" color="tertiary" dense>
          X-small
        </Button>
        <Button size="sm" color="tertiary" dense>
          Small
        </Button>
        <Button size="md" color="tertiary" dense>
          Medium
        </Button>
        <Button size="lg" color="tertiary" dense>
          Large
        </Button>
        <Button size="xl" color="tertiary" dense>
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<GlobeIcon />}
          size="xs"
          color="secondary"
          variant="elevated"
          dense
        >
          X-small
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="sm"
          color="secondary"
          variant="elevated"
          dense
        >
          Small
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="md"
          color="secondary"
          variant="elevated"
          dense
        >
          Medium
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="lg"
          color="secondary"
          variant="elevated"
          dense
        >
          Large
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="xl"
          color="secondary"
          variant="elevated"
          dense
        >
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<GlobeIcon />}
          size="xs"
          color="primary"
          variant="text"
          dense
        >
          X-small
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="sm"
          color="primary"
          variant="text"
          dense
        >
          Small
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="md"
          color="primary"
          variant="text"
          dense
        >
          Medium
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="lg"
          color="primary"
          variant="text"
          dense
        >
          Large
        </Button>
        <Button
          leftIcon={<GlobeIcon />}
          size="xl"
          color="primary"
          variant="text"
          dense
        >
          X-Large
        </Button>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Material symbol icons
      </Heading>
      <DemoContainer>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          size="xs"
        >
          X-small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          size="md"
        >
          Medium
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          size="lg"
        >
          Large
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          size="xl"
        >
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="secondary"
          size="xs"
        >
          X-small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="secondary"
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="secondary"
          size="md"
        >
          Medium
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="secondary"
          size="lg"
        >
          Large
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="secondary"
          size="xl"
        >
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="tertiary"
          size="xs"
        >
          X-small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="tertiary"
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="tertiary"
          size="md"
        >
          Medium
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="tertiary"
          size="lg"
        >
          Large
        </Button>
        <Button
          leftIcon={<MaterialSymbolIcon icon="search" />}
          variant="elevated"
          color="tertiary"
          size="xl"
        >
          X-Large
        </Button>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Tabler icons
      </Heading>
      <DemoContainer>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="xs">
          X-small
        </Button>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="sm">
          Small
        </Button>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="md">
          Medium
        </Button>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="lg">
          Large
        </Button>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="xl">
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<SaveIcon />}
          variant="outlined"
          color="secondary"
          size="xs"
        >
          X-small
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="outlined"
          color="secondary"
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="outlined"
          color="secondary"
          size="md"
        >
          Medium
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="outlined"
          color="secondary"
          size="lg"
        >
          Large
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="outlined"
          color="secondary"
          size="xl"
        >
          X-Large
        </Button>
      </DemoContainer>
      <DemoContainer>
        <Button
          leftIcon={<SaveIcon />}
          variant="text"
          color="tertiary"
          size="xs"
        >
          X-small
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="text"
          color="tertiary"
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="text"
          color="tertiary"
          size="md"
        >
          Medium
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          rightIcon={<SaveIcon />}
          variant="text"
          color="tertiary"
          size="lg"
        >
          Large
        </Button>
        <Button
          leftIcon={<SaveIcon />}
          variant="text"
          color="tertiary"
          size="xl"
        >
          X-Large
        </Button>
      </DemoContainer>
    </DemoSection>
  );
}

export default ButtonDocsPage;
