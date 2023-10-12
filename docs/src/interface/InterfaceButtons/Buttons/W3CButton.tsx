import W3CIcon from '../../W3CIcon/W3CIcon';

import { ButtonProps, Button, Link } from '@snipshot/particles';

interface W3CButtonProps extends ButtonProps {
  link: string;
}

function W3CButton({ link, ...props }: W3CButtonProps) {
  return (
    <Button
      as={Link}
      href={link}
      isExternal
      externalIcon={false}
      leftIcon={<W3CIcon />}
      variant="soft"
      radius="full"
      size="sm"
      {...props}
    >
      WAI
    </Button>
  );
}

export default W3CButton;
