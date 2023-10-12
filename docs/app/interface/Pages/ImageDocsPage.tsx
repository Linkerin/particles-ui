'use client';

import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import {
  Divider,
  Heading,
  Image,
  ImageIconFallback,
  ImageIconFallbackProps,
  ImageSkeletonFallback
} from '../../../../src';

import avatar from '@/public/avatar.jpg';

const colors: Array<ImageIconFallbackProps['color']> = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error',
  'background'
];

function ImageDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Image Component
      </Heading>
      <Divider />
      <Heading variant="h6">Default, without fallbacks</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Image
          alt="default image"
          src={avatar.src}
          width={80}
          height={80}
          radius="xs"
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">
        With `fallbackSrc` and combined with `fallback`
      </Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Image
          alt="default image"
          src="https://app.requestly.io/delay/2000/https://upload.wikimedia.org/wikipedia/commons/a/a1/Square_funny.svg"
          fallbackSrc="https://via.placeholder.com/80"
          width={80}
          height={80}
          radius="xs"
        />
        <Image
          alt="default image"
          src="https://app.requestly.io/delay/2000/https://upload.wikimedia.org/wikipedia/commons/a/a1/Square_funny.svg"
          fallbackSrc="https://via.placeholder.com/80"
          fallback={<ImageIconFallback icon="loading" />}
          width={80}
          height={80}
          radius="xs"
          fadeInAnimation={true}
        />
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Default fallbacks</Heading>
      <Heading as="h3" variant="subtitle-md">
        Filled
      </Heading>
      <DemoContainer>
        {colors.map(color => (
          <Image
            key={color}
            alt={`${color} filled fallback`}
            fallback={<ImageIconFallback icon="loading" color={color} />}
            height={80}
            width={80}
            radius="xs"
          />
        ))}
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Outlined
      </Heading>
      <DemoContainer>
        {colors.map(color => (
          <Image
            key={color}
            alt={`${color} outlined fallback`}
            fallback={
              <ImageIconFallback
                icon="error"
                color={color}
                variant="outlined"
              />
            }
            height={80}
            width={80}
            radius="xs"
          />
        ))}
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Skeleton pulse
      </Heading>
      <DemoContainer>
        {colors.map(color => (
          <Image
            key={color}
            alt={`${color} skeleton fallback`}
            fallback={<ImageSkeletonFallback color={color} />}
            height={80}
            width={80}
            radius="xs"
          />
        ))}
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Skeleton wave
      </Heading>
      <DemoContainer>
        {colors.map(color => (
          <Image
            key={color}
            alt={`${color} skeleton fallback`}
            fallback={<ImageSkeletonFallback animation="wave" color={color} />}
            height={80}
            width={80}
            radius="xs"
          />
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Errors</Heading>
      <Heading as="h3" variant="subtitle-md">
        fallBackSrc with and without preload
      </Heading>
      <DemoContainer>
        <Image
          alt="default image"
          src="https://app.requestly.io/delay/3000/broken"
          fallbackSrc="https://via.placeholder.com/80"
          width={80}
          height={80}
          radius="xs"
          wrapperProps={{
            style: { backgroundColor: 'var(--pui-background-container)' }
          }}
        />
        <Image
          alt="default image"
          src="https://app.requestly.io/delay/3000/broken"
          fallbackSrc="https://via.placeholder.com/80"
          width={80}
          height={80}
          radius="xs"
          preloadFallbackSrc={false}
          wrapperProps={{
            style: { backgroundColor: 'var(--pui-background-container)' }
          }}
        />
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Loading and on error fallbacks
      </Heading>
      <DemoContainer>
        <Image
          alt="default image"
          src="https://app.requestly.io/delay/3000/broken"
          fallback={<ImageSkeletonFallback color="tertiary" />}
          fallbackOnError={<ImageIconFallback icon="error" color="error" />}
          width={80}
          height={80}
          radius="xs"
          preloadFallbackSrc={false}
          wrapperProps={{
            style: { backgroundColor: 'var(--pui-background-container)' }
          }}
        />
      </DemoContainer>
    </DemoSection>
  );
}

export default ImageDocsPage;
