import { IconBrandGithubFilled } from '@tabler/icons-react';

import {
  Button,
  ButtonProps
} from '../../../../../../src/components/Button/Button';
import { Link } from '../../../../../../src/components/Link/Link';

interface GithubButtonProps extends ButtonProps {
  link: string;
}

function GithubButton({ link, ...props }: GithubButtonProps) {
  return (
    <Button
      as={Link}
      href={`https://github.com/Linkerin/particles-ui/src/components/${link}`}
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
