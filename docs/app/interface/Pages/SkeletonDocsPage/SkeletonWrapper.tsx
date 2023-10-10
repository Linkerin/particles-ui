'use client';

import { useCallback, useState } from 'react';

import { Button } from '@/src/components/Button/Button';
import { Card } from '@/src/components/Card/Card';
import { CardBody } from '@/src/components/Card/CardBody/CardBody';
import { CardHeader } from '@/src/components/Card/CardHeader/CardHeader';
import DemoContainer from '../../DemoContainer';
import { Skeleton } from '@/src/components/Skeleton/Skeleton';
import { Heading } from '@/src/components/Heading/Heading';
import { Text } from '@/src/components/Text/Text';

function SkeletonWrapper() {
  const [loaded, setLoaded] = useState(false);

  const onClickHandler = useCallback(() => {
    setLoaded(prevState => !prevState);
  }, []);

  return (
    <>
      <Heading variant="h6">Wrapper</Heading>
      <DemoContainer>
        <Skeleton isLoaded={loaded} radius="md" fitContent>
          <Card>
            <CardHeader>
              <Heading as="h1" variant="subtitle-lg">
                Attractive heading
              </Heading>
            </CardHeader>
            <CardBody>
              <Text size="sm">Very exciting card content</Text>
            </CardBody>
          </Card>
        </Skeleton>
        <Button variant="outlined" onClick={onClickHandler}>
          Toggle visibility
        </Button>
      </DemoContainer>
    </>
  );
}

export default SkeletonWrapper;
