import DemoContainer from '../../../DemoContainer';
import Heading from '@/lib/components/Heading/Heading';
import IconButton from '@/lib/components/IconButton/IconButton';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

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
            aria-label="Globe elevated icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="edit" />}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="uncolored"
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
            aria-label="Globe elevated icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="edit" />}
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            disabled
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="uncolored"
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
            aria-label="Globe elevated icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="edit" />}
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            isLoading
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="uncolored"
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
            aria-label="Globe elevated icon"
            title="Color: primary"
            icon={<MaterialSymbolIcon icon="edit" />}
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="secondary"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="tertiary"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="success"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="info"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="warning"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="error"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<MaterialSymbolIcon icon="edit" />}
            color="uncolored"
            isLoading
            loadingSpinner={false}
            variant="elevated"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonElevated;
