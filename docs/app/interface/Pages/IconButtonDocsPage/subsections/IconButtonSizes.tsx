import { IconAtom2 as AtomIcon } from '@tabler/icons-react';

import DemoContainer from '../../../DemoContainer';
import GlobeIcon from '../../../GlobeIcon';
import { Heading, IconButton, MaterialSymbolIcon } from '../../../../../../src';

function IconButtonSizes() {
  return (
    <>
      <Heading variant="h6">Sizes</Heading>
      <Heading as="h3" variant="subtitle-lg">
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
      <Heading as="h3" variant="subtitle-lg">
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
      <Heading as="h3" variant="subtitle-lg">
        Tabler icon
      </Heading>
      <DemoContainer>
        <IconButton
          aria-label="Small globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="xs"
          color="secondary"
        />
        <IconButton
          aria-label="Small globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="sm"
          color="secondary"
        />
        <IconButton
          aria-label="Medium globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="md"
          color="secondary"
        />
        <IconButton
          aria-label="Large globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="lg"
          color="secondary"
        />
        <IconButton
          aria-label="X-large globe icon"
          icon={<AtomIcon />}
          variant="filled"
          size="xl"
          color="secondary"
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-lg">
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
    </>
  );
}

export default IconButtonSizes;
