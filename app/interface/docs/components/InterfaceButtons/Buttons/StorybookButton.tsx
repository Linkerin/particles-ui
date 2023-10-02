import { IconBrandStorybook } from '@tabler/icons-react';

import {
  Button,
  ButtonProps
} from '../../../../../../src/components/Button/Button';
import { Link } from '../../../../../../src/components/Link/Link';

interface StorybookButtonProps extends ButtonProps {
  link: string;
}

function StorybookButton({ link, ...props }: StorybookButtonProps) {
  return (
    <Button
      as={Link}
      href={`https://particles-book.snipshot.dev/?path=/docs/${link}`}
      isExternal
      externalIcon={false}
      leftIcon={<IconBrandStorybook />}
      variant="soft"
      radius="full"
      size="sm"
      {...props}
    >
      Storybook
    </Button>
  );
}

export default StorybookButton;
