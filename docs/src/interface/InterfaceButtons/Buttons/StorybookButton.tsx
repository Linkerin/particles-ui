import { IconBrandStorybook } from '@tabler/icons-react';
import { ButtonProps, Button, Link } from '@snipshot/particles';

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
