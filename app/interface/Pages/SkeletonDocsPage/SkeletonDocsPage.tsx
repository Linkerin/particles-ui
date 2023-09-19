import DemoContainer from '../../DemoContainer';
import DemoSection from '../../DemoSection';
import { Divider } from '@/lib/components/Divider/Divider';
import { Heading } from '@/lib/components/Heading/Heading';
import { Skeleton } from '@/lib/components/Skeleton/Skeleton';
import { SkeletonText } from '@/lib/components/SkeletonText/SkeletonText';
import SkeletonWrapper from './SkeletonWrapper';

import styles from './SkeletonDocsPage.module.scss';

function SkeletonDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Skeleton Component
      </Heading>
      <Divider />
      <Heading variant="h6">Animations</Heading>
      <DemoContainer>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="none" />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Types</Heading>
      <DemoContainer>
        <Skeleton type="avatar" />
        <Skeleton type="button" />
        <Skeleton type="image" />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Custom shape</Heading>
      <DemoContainer>
        <Skeleton animation="wave" height="3rem" width="2rem" radius="xl" />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Custom colors</Heading>
      <DemoContainer>
        <Skeleton className={styles.colors} animation="wave" />
        <Skeleton className={styles.colors} animation="none" />
      </DemoContainer>
      <Divider />
      <SkeletonWrapper />
      <Divider />
      <Heading variant="h6">SkeletonText</Heading>
      <SkeletonText noOfLines={4} gap="lg" />
    </DemoSection>
  );
}

export default SkeletonDocsPage;
