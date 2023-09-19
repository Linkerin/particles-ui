import DemoContainer from '../../../DemoContainer';
import { Heading } from '@/lib/components/Heading/Heading';
import { IconButton } from '@/lib/components/IconButton/IconButton';
import GlobeIcon from '../../../GlobeIcon';

function IconButtonStandard() {
  return (
    <>
      <Heading as="h3" variant="subtitle-lg">
        Standard
      </Heading>
      <>
        <Heading as="h4" variant="subtitle-md">
          Colors
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe standard icon"
            title="Color: primary"
            icon={<GlobeIcon />}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="uncolored"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Disabled
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe standard icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            disabled
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="uncolored"
            disabled
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading with spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe standard icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            isLoading
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="uncolored"
            isLoading
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading without spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe standard icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            isLoading
            loadingSpinner={false}
          />
          <IconButton
            aria-label="Globe standard icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="uncolored"
            isLoading
            loadingSpinner={false}
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonStandard;
