import DemoContainer from '@/app/interface/DemoContainer';
import Heading from '@/app/_components/Heading/Heading';
import IconButton from '@/app/_components/IconButton/IconButton';
import { IconAtom2 as AtomIcon } from '@tabler/icons-react';

function IconButtonFilled() {
  return (
    <>
      <Heading as="h3" variant="subtitle-lg">
        Filled
      </Heading>
      <>
        <Heading as="h4" variant="subtitle-md">
          Colors
        </Heading>
        <DemoContainer>
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: primary"
            icon={<AtomIcon />}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<AtomIcon />}
            color="secondary"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<AtomIcon />}
            color="tertiary"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<AtomIcon />}
            color="success"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<AtomIcon />}
            color="info"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<AtomIcon />}
            color="warning"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<AtomIcon />}
            color="error"
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<AtomIcon />}
            color="uncolored"
            variant="filled"
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
            icon={<AtomIcon />}
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<AtomIcon />}
            color="secondary"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<AtomIcon />}
            color="tertiary"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<AtomIcon />}
            color="success"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<AtomIcon />}
            color="info"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<AtomIcon />}
            color="warning"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<AtomIcon />}
            color="error"
            disabled
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<AtomIcon />}
            color="uncolored"
            disabled
            variant="filled"
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
            icon={<AtomIcon />}
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<AtomIcon />}
            color="secondary"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<AtomIcon />}
            color="tertiary"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<AtomIcon />}
            color="success"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<AtomIcon />}
            color="info"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<AtomIcon />}
            color="warning"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<AtomIcon />}
            color="error"
            isLoading
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<AtomIcon />}
            color="uncolored"
            isLoading
            variant="filled"
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
            icon={<AtomIcon />}
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: secondary"
            icon={<AtomIcon />}
            color="secondary"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: tertiary"
            icon={<AtomIcon />}
            color="tertiary"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: success"
            icon={<AtomIcon />}
            color="success"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: info"
            icon={<AtomIcon />}
            color="info"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: warning"
            icon={<AtomIcon />}
            color="warning"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: error"
            icon={<AtomIcon />}
            color="error"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
          <IconButton
            aria-label="Globe elevated icon"
            title="Color: none"
            icon={<AtomIcon />}
            color="uncolored"
            isLoading
            loadingSpinner={false}
            variant="filled"
          />
        </DemoContainer>
      </>
    </>
  );
}

export default IconButtonFilled;
