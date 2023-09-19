import DemoContainer from '../../../DemoContainer';
import { Heading } from '@/lib/components/Heading/Heading';
import { IconButton } from '@/lib/components/IconButton/IconButton';
import { MaterialSymbolIcon } from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

function IconButtonSoft() {
  return (
    <>
      <Heading as="h3" variant="subtitle-lg">
        Soft
      </Heading>
      <>
        <Heading as="h4" variant="subtitle-md">
          Colors
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe soft icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="uncolored"
            variant="soft"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Disabled
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe soft icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="uncolored"
            disabled
            variant="soft"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading with spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe soft icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="uncolored"
            isLoading
            variant="soft"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading without spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe soft icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
          <IconButton
            aria-label="Globe soft icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="uncolored"
            isLoading
            loadingSpinner={false}
            variant="soft"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonSoft;
