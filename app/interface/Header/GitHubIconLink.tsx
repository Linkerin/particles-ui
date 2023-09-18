import NextLink from 'next/link';
import IconButton from '@/lib/components/IconButton/IconButton';
import { IconBrandGithub } from '@tabler/icons-react';

function GithubIconLink() {
  return (
    <>
      <IconButton
        as={NextLink}
        href="https://github.com/Linkerin/particles-ui-demo"
        aria-label="Navigate to Particles UI GitHub repository"
        title="To GitHub repository"
        variant="standard"
        icon={<IconBrandGithub />}
      />
    </>
  );
}

export default GithubIconLink;
