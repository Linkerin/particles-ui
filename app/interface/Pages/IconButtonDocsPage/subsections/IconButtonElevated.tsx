import DemoContainer from '../../../DemoContainer';
import Heading from '@/app/_components/Heading/Heading';
import IconButton from '@/app/_components/IconButton/IconButton';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

function IconButtonElevated() {
  return (
    <>
      <Heading as="h3" variant="subtitle-lg">
        Elevated
      </Heading>
      <>
        <Heading as="h4" variant="subtitle-md">
          Colors
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe text icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="edit" />}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            variant="elevated"
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
            icon={<MaterialSymbolIcon icon="edit" />}
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            disabled
            variant="elevated"
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
            icon={<MaterialSymbolIcon icon="edit" />}
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            isLoading
            variant="elevated"
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
            icon={<MaterialSymbolIcon icon="edit" />}
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
          <IconButton
            aria-label="Globe text icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            isLoading
            noLoadingSpinner
            variant="elevated"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonElevated;
