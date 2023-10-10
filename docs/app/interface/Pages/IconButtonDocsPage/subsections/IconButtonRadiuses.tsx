import DemoContainer from '../../../DemoContainer';
import { Heading } from '@/src/components/Heading/Heading';
import { IconButton } from '@/src/components/IconButton/IconButton';
import { MaterialSymbolIcon } from '@/src/components/MaterialSymbolIcon/MaterialSymbolIcon';

function IconButtonRadiuses() {
  return (
    <>
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="none"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="xs"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="sm"
        />
        <IconButton
          aria-label="Small material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="md"
        />
        <IconButton
          aria-label="Medium material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="lg"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="xl"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="full"
        />
        <IconButton
          aria-label="Large material icon"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="elevated"
          color="tertiary"
          radius="round"
        />
      </DemoContainer>
    </>
  );
}

export default IconButtonRadiuses;
