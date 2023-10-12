'use client';

import { useCallback, useState } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Heading,
  Text
} from '../../../../../src';
import DemoContainer from '../../DemoContainer';

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
