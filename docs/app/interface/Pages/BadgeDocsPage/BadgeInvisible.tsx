'use client';

import { useState } from 'react';

import { Avatar } from '@/src/components/Avatar/Avatar';
import { Badge } from '@/src/components/Badge/Badge';
import { BadgeInline } from '@/src/components/BadgeInline/BadgeInline';
import { Button } from '@/src/components/Button/Button';
import DemoContainer from '../../DemoContainer';
import { Heading } from '@/src/components/Heading/Heading';

import avatar2 from '@/public/avatar-2.jpeg';

function BadgeInvisible() {
  const [invisible, setInVisible] = useState(false);

  const handleClick = () => {
    setInVisible(prevState => !prevState);
  };

  return (
    <>
      <Heading variant="h6">Invisible</Heading>
      <DemoContainer>
        <Badge
          aria-label="Number of new messages"
          content={1536}
          maxChars={3}
          shape="circle"
          invisible={invisible}
        >
          <Avatar
            src={avatar2.src}
            alt={`Badge for invisible prop`}
            size="lg"
          />
        </Badge>
        <Button
          variant="soft"
          color="warning"
          radius="sm"
          onClick={handleClick}
        >
          Toggle invisible{' '}
          <BadgeInline
            aria-label="Invisible test badge"
            content="Visible"
            radius="xs"
            variant="soft"
            color="success"
            invisible={invisible}
          />
        </Button>
      </DemoContainer>
    </>
  );
}

export default BadgeInvisible;
