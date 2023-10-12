import { IconBrandGithubFilled } from '@tabler/icons-react';

import { ButtonProps, Button, Link } from '@snipshot/particles';

interface GithubButtonProps extends ButtonProps {
  link: string;
}

function GithubButton({ link, ...props }: GithubButtonProps) {
  return (
    <Button
      as={Link}
      href={`https://github.com/Linkerin/particles-ui/tree/main/src/components/${link}`}
      isExternal
      externalIcon={false}
      leftIcon={<IconBrandGithubFilled />}
      variant="soft"
      radius="full"
      size="sm"
      {...props}
    >
      Source
    </Button>
  );
}

export default GithubButton;
