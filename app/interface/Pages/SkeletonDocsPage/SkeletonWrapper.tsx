'use client';

import { useCallback, useState } from 'react';

import Button from '@/lib/components/Button/Button';
import Card from '@/lib/components/Card/Card';
import CardBody from '@/lib/components/Card/CardBody/CardBody';
import CardHeader from '@/lib/components/Card/CardHeader/CardHeader';
import DemoContainer from '../../DemoContainer';
import Skeleton from '@/lib/components/Skeleton/Skeleton';
import Heading from '@/lib/components/Heading/Heading';
import Text from '@/lib/components/Text/Text';

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
