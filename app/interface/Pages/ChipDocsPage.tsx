'use client';

import Chip from '@/app/_components/Chip/Chip';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconHeart } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

function ChipDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Chip Component
      </Heading>
      <Divider />
      <Heading variant="h6">Variants</Heading>
      <DemoContainer>
        <Chip>Outlined chip</Chip>
        <Chip
          onClick={e => {
            console.log('Outlined chip clicked');
          }}
        >
          Outlined clickable chip
        </Chip>
        <Chip
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
        >
          Deletable chip
        </Chip>
        <Chip
          onClick={e => {
            console.log('Deletable chip clicked');
          }}
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
        >
          Clickable deletable
        </Chip>
        <Chip radius="full">Outlined full chip</Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip variant="elevated">Elevated chip</Chip>
        <Chip
          onClick={e => {
            console.log('Elevated chip clicked');
          }}
          variant="elevated"
        >
          Elevated clickable chip
        </Chip>
        <Chip
          variant="elevated"
          onDelete={e => {
            alert('Delete try on elevated chip!');
          }}
        >
          Elevated deletable chip
        </Chip>
        <Chip
          variant="elevated"
          onClick={e => {
            console.log('Deletable chip clicked');
          }}
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
        >
          Clickable deletable
        </Chip>
        <Chip variant="elevated" radius="full">
          Elevated full chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip variant="filled">Filled chip</Chip>
        <Chip
          onClick={e => {
            console.log('Outlined chip clicked');
          }}
          variant="filled"
        >
          Filled clickable chip
        </Chip>
        <Chip
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
          variant="filled"
        >
          Deletable chip
        </Chip>
        <Chip
          onClick={e => {
            console.log('Deletable chip clicked');
          }}
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
          variant="filled"
        >
          Clickable deletable
        </Chip>
        <Chip radius="full" variant="filled">
          Filled full chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip variant="soft">Soft chip</Chip>
        <Chip
          onClick={e => {
            console.log('Outlined chip clicked');
          }}
          variant="soft"
        >
          Soft clickable chip
        </Chip>
        <Chip
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
          variant="soft"
        >
          Deletable chip
        </Chip>
        <Chip
          onClick={e => {
            console.log('Deletable chip clicked');
          }}
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
          variant="soft"
        >
          Clickable deletable
        </Chip>
        <Chip radius="full" variant="soft">
          Soft full chip
        </Chip>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <Chip variant="elevated" radius="none">
          None
        </Chip>
        <Chip variant="elevated" radius="xs">
          X-Small
        </Chip>
        <Chip variant="elevated" radius="sm">
          Small
        </Chip>
        <Chip variant="elevated" radius="md">
          Medium
        </Chip>
        <Chip variant="elevated" radius="lg">
          Large
        </Chip>
        <Chip variant="elevated" radius="xl">
          X-Large
        </Chip>
        <Chip variant="elevated" radius="full">
          Full
        </Chip>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Disabled</Heading>
      <DemoContainer>
        <Chip disabled>Outlined chip</Chip>
        <Chip disabled variant="elevated">
          Elevated chip
        </Chip>
        <Chip disabled variant="filled">
          Filled chip
        </Chip>
        <Chip disabled variant="soft">
          Soft chip
        </Chip>
        <Chip
          disabled
          onDelete={e => {
            alert('Delete try on outlined chip');
          }}
        >
          Deletable chip
        </Chip>
        <Chip
          disabled
          variant="elevated"
          onDelete={e => {
            alert('Delete try on elevated chip!');
          }}
        >
          Elevated deletable chip
        </Chip>
        <Chip
          disabled
          variant="filled"
          onDelete={e => {
            alert('Delete try on elevated chip!');
          }}
        >
          Filled deletable chip
        </Chip>
        <Chip
          disabled
          variant="soft"
          onDelete={e => {
            alert('Delete try on elevated chip!');
          }}
        >
          Soft deletable chip
        </Chip>
        <Chip disabled leftIcon={<GlobeIcon />}>
          Svg chip
        </Chip>
        <Chip disabled rightIcon={<MaterialSymbolIcon icon="search" />}>
          Material chip
        </Chip>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">With Icons</Heading>
      <DemoContainer>
        <Chip leftIcon={<GlobeIcon />}>Left svg</Chip>
        <Chip rightIcon={<GlobeIcon />}>Right svg</Chip>
        <Chip leftIcon={<GlobeIcon />} rightIcon={<GlobeIcon />}>
          Both svg
        </Chip>
        <Chip
          leftIcon={<GlobeIcon />}
          rightIcon={<GlobeIcon />}
          onDelete={e => {
            alert('Delete try on Svg icons chip!');
          }}
        >
          Deletable svg
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip radius="full" leftIcon={<GlobeIcon />}>
          Left svg
        </Chip>
        <Chip radius="full" rightIcon={<GlobeIcon />}>
          Right svg
        </Chip>
        <Chip radius="full" leftIcon={<GlobeIcon />} rightIcon={<GlobeIcon />}>
          Both svg
        </Chip>
        <Chip
          radius="full"
          leftIcon={<GlobeIcon />}
          rightIcon={<GlobeIcon />}
          onDelete={e => {
            alert('Delete try on Svg icons chip!');
          }}
        >
          Deletable svg
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip leftIcon={<MaterialSymbolIcon icon="search" />}>
          Left material
        </Chip>
        <Chip rightIcon={<MaterialSymbolIcon icon="search" />}>
          Right material
        </Chip>
        <Chip
          leftIcon={<MaterialSymbolIcon icon="search" />}
          rightIcon={<MaterialSymbolIcon icon="home" />}
        >
          Both material
        </Chip>
        <Chip
          leftIcon={<MaterialSymbolIcon icon="search" />}
          rightIcon={<MaterialSymbolIcon icon="home" />}
          onDelete={e => {
            alert('Delete try on material icons chip!');
          }}
        >
          Deletable material
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip
          radius="full"
          variant="elevated"
          leftIcon={<MaterialSymbolIcon icon="search" />}
        >
          Left material
        </Chip>
        <Chip
          radius="full"
          variant="elevated"
          rightIcon={<MaterialSymbolIcon icon="search" />}
        >
          Right material
        </Chip>
        <Chip
          radius="full"
          variant="elevated"
          leftIcon={<MaterialSymbolIcon icon="search" />}
          rightIcon={<MaterialSymbolIcon icon="home" />}
        >
          Both material
        </Chip>
        <Chip
          radius="full"
          variant="elevated"
          leftIcon={<MaterialSymbolIcon icon="search" />}
          rightIcon={<MaterialSymbolIcon icon="home" />}
          onDelete={e => {
            alert('Delete try on material icons chip!');
          }}
        >
          Deletable material
        </Chip>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Icon colors</Heading>
      <DemoContainer>
        <Chip
          onClick={e => {
            console.log('Clicked primary color');
          }}
          leftIcon={<GlobeIcon />}
        >
          Primary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked secondary color');
          }}
          leftIcon={<GlobeIcon />}
          color="secondary"
        >
          Secondary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked tertiary color');
          }}
          leftIcon={<GlobeIcon />}
          color="tertiary"
        >
          Tertiary
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip
          onClick={e => {
            console.log('Clicked primary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="code" />}
          variant="elevated"
        >
          Primary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked secondary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="code" />}
          variant="elevated"
          color="secondary"
        >
          Secondary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked tertiary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="edit" />}
          variant="elevated"
          color="tertiary"
        >
          Tertiary
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip
          onClick={e => {
            console.log('Clicked primary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="edit" />}
          variant="filled"
        >
          Primary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked secondary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="edit" />}
          variant="filled"
          color="secondary"
        >
          Secondary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked tertiary color');
          }}
          leftIcon={<MaterialSymbolIcon icon="code" />}
          variant="filled"
          color="tertiary"
        >
          Tertiary
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip
          onClick={e => {
            console.log('Clicked primary color');
          }}
          leftIcon={<GlobeIcon />}
          variant="soft"
        >
          Primary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked secondary color');
          }}
          leftIcon={<GlobeIcon />}
          color="secondary"
          variant="soft"
        >
          Secondary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked tertiary color');
          }}
          leftIcon={<GlobeIcon />}
          color="tertiary"
          variant="soft"
        >
          Tertiary
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked success color');
          }}
          leftIcon={<GlobeIcon />}
          variant="soft"
          color="success"
        >
          Success
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked info color');
          }}
          leftIcon={<GlobeIcon />}
          color="info"
          variant="soft"
        >
          Info
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked warning color');
          }}
          leftIcon={<GlobeIcon />}
          color="warning"
          variant="soft"
        >
          Warning
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked error color');
          }}
          leftIcon={<GlobeIcon />}
          color="error"
          variant="soft"
        >
          Error
        </Chip>
        <Chip
          onClick={e => {
            console.log('Clicked none color');
          }}
          leftIcon={<GlobeIcon />}
          color="uncolored"
          variant="soft"
        >
          None
        </Chip>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer>
        <Chip size="xs">X-Small chip</Chip>
        <Chip size="sm">Small chip</Chip>
        <Chip>Medium chip</Chip>
        <Chip size="lg">Large chip</Chip>
        <Chip size="xl">X-Large chip</Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip radius="full" size="xs">
          X-Small full chip
        </Chip>
        <Chip radius="full" size="sm">
          Small full chip
        </Chip>
        <Chip radius="full">Medium full chip</Chip>
        <Chip radius="full" size="lg">
          Large full chip
        </Chip>
        <Chip radius="full" size="xl">
          X-Large full chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip leftIcon={<GlobeIcon />} size="xs">
          X-Small chip
        </Chip>
        <Chip leftIcon={<GlobeIcon />} size="sm">
          Small chip
        </Chip>
        <Chip leftIcon={<GlobeIcon />}>Medium chip</Chip>
        <Chip leftIcon={<GlobeIcon />} size="lg">
          Large chip
        </Chip>
        <Chip leftIcon={<GlobeIcon />} size="xl">
          X-Large chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip leftIcon={<MaterialSymbolIcon icon="local_taxi" />} size="xs">
          X-Small chip
        </Chip>
        <Chip leftIcon={<MaterialSymbolIcon icon="local_taxi" />} size="sm">
          Small chip
        </Chip>
        <Chip leftIcon={<MaterialSymbolIcon icon="local_taxi" />}>
          Medium chip
        </Chip>
        <Chip leftIcon={<MaterialSymbolIcon icon="local_taxi" />} size="lg">
          Large chip
        </Chip>
        <Chip leftIcon={<MaterialSymbolIcon icon="local_taxi" />} size="xl">
          X-Large chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip leftIcon={<IconHeart />} size="xs">
          X-Small chip
        </Chip>
        <Chip leftIcon={<IconHeart />} size="sm">
          Small chip
        </Chip>
        <Chip leftIcon={<IconHeart />}>Medium chip</Chip>
        <Chip leftIcon={<IconHeart />} size="lg">
          Large chip
        </Chip>
        <Chip leftIcon={<IconHeart />} size="xl">
          X-Large chip
        </Chip>
      </DemoContainer>
      <DemoContainer>
        <Chip
          radius="full"
          onDelete={e => {
            alert('Delete try on small chip');
          }}
          size="xs"
        >
          X-Small deletable
        </Chip>
        <Chip
          radius="full"
          onDelete={e => {
            alert('Delete try on small chip');
          }}
          size="sm"
        >
          Small deletable
        </Chip>
        <Chip
          radius="full"
          onDelete={e => {
            alert('Delete try on medium chip');
          }}
        >
          Medium deletable
        </Chip>
        <Chip
          radius="full"
          onDelete={e => {
            alert('Delete try on large chip');
          }}
          size="lg"
        >
          Large deletable
        </Chip>
        <Chip
          radius="full"
          onDelete={e => {
            alert('Delete try on large chip');
          }}
          size="xl"
        >
          X-Large deletable
        </Chip>
      </DemoContainer>
    </DemoSection>
  );
}

export default ChipDocsPage;
