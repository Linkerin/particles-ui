import Link from 'next/link';
import W3CIcon from '../../W3CIcon/W3CIcon';

import {
  Button,
  ButtonProps
} from '../../../../../../src/components/Button/Button';

interface W3CButtonProps extends ButtonProps {
  link: string;
}

function W3CButton({ link, ...props }: W3CButtonProps) {
  return (
    <Button
      as={Link}
      href={link}
      target="_blank"
      rel="noopener external"
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
