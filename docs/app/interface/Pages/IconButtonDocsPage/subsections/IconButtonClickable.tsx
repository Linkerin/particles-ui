'use client';

import DemoContainer from '@/app/interface/DemoContainer';
import GlobeIcon from '@/app/interface/GlobeIcon';
import { Heading, IconButton } from '../../../../../../src';

function IconButtonClickable() {
  const onClickHandler: React.MouseEventHandler = e => {
    console.log('Icon button clicked!');
  };

  return (
    <>
      <Heading variant="h5">With `onClick` handler</Heading>
      <DemoContainer>
        <IconButton
          aria-label="Globe filled icon with onClick"
          title="onClick handler"
          icon={<GlobeIcon />}
          variant="filled"
          onClick={onClickHandler}
        />
        <IconButton
          aria-label="Globe filled icon with onClick"
          title="onClick handler"
          icon={<GlobeIcon />}
          variant="filled"
          onClick={onClickHandler}
          disabled
        />
        <IconButton
          aria-label="Globe filled icon with onClick"
          title="onClick handler"
          icon={<GlobeIcon />}
          variant="filled"
          onClick={onClickHandler}
          isLoading
        />
      </DemoContainer>
    </>
  );
}

export default IconButtonClickable;
