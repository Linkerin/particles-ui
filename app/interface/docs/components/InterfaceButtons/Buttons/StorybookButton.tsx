import Link from 'next/link';
import { IconBrandStorybook } from '@tabler/icons-react';

import {
  Button,
  ButtonProps
} from '../../../../../../src/components/Button/Button';

interface StorybookButtonProps extends ButtonProps {
  link: string;
}

function StorybookButton({ link, ...props }: StorybookButtonProps) {
  return (
    <Button
      as={Link}
      href={`https://particles-book.snipshot.dev/?path=/docs/${link}`}
      target="_blank"
      rel="noopener external"
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
