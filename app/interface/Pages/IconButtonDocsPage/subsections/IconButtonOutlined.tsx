import DemoContainer from '../../../DemoContainer';
import Heading from '@/app/_components/Heading/Heading';
import GlobeIcon from '../../../GlobeIcon';
import IconButton from '@/app/_components/IconButton/IconButton';

function IconButtonOutlined() {
  return (
    <>
      <Heading as="h3" variant="subtitle-lg">
        Outlined
      </Heading>
      <>
        <Heading as="h4" variant="subtitle-md">
          Colors
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="none"
            variant="outlined"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Disabled
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            disabled
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="none"
            disabled
            variant="outlined"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading with spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            isLoading
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="none"
            isLoading
            variant="outlined"
          />
        </DemoContainer>
      </>
      <>
        <Heading as="h4" variant="subtitle-md">
          Loading without spinner
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: primary"
            icon={<GlobeIcon />}
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: secondary"
            icon={<GlobeIcon />}
            color="secondary"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: tertiary"
            icon={<GlobeIcon />}
            color="tertiary"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: success"
            icon={<GlobeIcon />}
            color="success"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: info"
            icon={<GlobeIcon />}
            color="info"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: warning"
            icon={<GlobeIcon />}
            color="warning"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: error"
            icon={<GlobeIcon />}
            color="error"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
          <IconButton
            aria-label="Globe outlined icon"
            title="Color: none"
            icon={<GlobeIcon />}
            color="none"
            isLoading
            noLoadingSpinner
            variant="outlined"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonOutlined;
