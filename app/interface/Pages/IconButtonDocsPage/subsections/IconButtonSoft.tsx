import DemoContainer from '../../../DemoContainer';
import Heading from '@/app/_components/Heading/Heading';
import IconButton from '@/app/_components/IconButton/IconButton';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

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
            aria-label="Globe text icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
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
            aria-label="Globe text icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            disabled
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
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
            aria-label="Globe text icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            isLoading
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
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
            aria-label="Globe text icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="settings" />}
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="secondary"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="tertiary"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="success"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="info"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="warning"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="settings" />}
            color="error"
            isLoading
            noLoadingSpinner
            variant="soft"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonSoft;
