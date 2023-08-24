'use client';
import { IconDeviceFloppy as SaveIcon } from '@tabler/icons-react';

import Button from '../../_components/Button/Button';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import Heading from '@/app/_components/Heading/Heading';
import GlobeIcon from '../GlobeIcon';
// import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

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
          onClick={e => {
            console.log('Clicked');
          }}
        >
          Filled
        </Button>
        <Button variant="outlined">Outlined</Button>
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
      {/* <DemoContainer>
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
      </DemoContainer> */}
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
          Small
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
      {/* <h3>
        Material symbol icons
      </h3>
      <DemoContainer>
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
      </DemoContainer> */}
      <Heading as="h3" variant="subtitle-md">
        Tabler icons
      </Heading>
      <DemoContainer>
        <Button leftIcon={<SaveIcon />} variant="elevated" size="xs">
          Small
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
          Small
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
          Small
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
