import Link from 'next/link';
import { IconBrandGithubFilled } from '@tabler/icons-react';

import {
  Button,
  ButtonProps
} from '../../../../../../lib/components/Button/Button';

interface GithubButtonProps extends ButtonProps {
  link: string;
}

function GithubButton({ link, ...props }: GithubButtonProps) {
  return (
    <Button
      as={Link}
      href={`https://github.com/Linkerin/particles-ui/lib/components/${link}`}
      target="_blank"
      rel="noopener external"
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
