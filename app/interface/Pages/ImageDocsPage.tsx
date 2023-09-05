'use client';

import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/lib/components/Heading/Heading';
import { IconHeart } from '@tabler/icons-react';
import Image from '@/lib/components/Image/Image';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

import ImageFallback from '@/lib/components/ImageFallback/ImageFallback';

function ImageDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Image Component
      </Heading>
      <Divider />
      <Heading variant="h6">Image</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Image
          alt="Test image"
          // src="https://app.requestly.io/delay/2000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          src="https://app.requestly.io/delay/3000/https://2avatars.githubusercontent.com/u/130695447?v=4"
          // fallbackSrc="https://avatars.githubusercontent.com/u/130695447?v=4"
          // fallbackSrc="https://via.placeholder.com/150"
          fallback={<ImageFallback variant="skeleton" />}
          // fallbackOnError={<ImageFallback variant="skeleton" />}
          height={150}
          width={150}
          radius="lg"
        />
      </DemoContainer>
      <Divider />
    </DemoSection>
  );
}

export default ImageDocsPage;
