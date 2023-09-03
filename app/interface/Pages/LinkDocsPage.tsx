import Card from '@/lib/components/Card/Card';
import CardBody from '@/lib/components/Card/CardBody/CardBody';
import CardFooter from '@/lib/components/Card/CardFooter/CardFooter';
import CardHeader from '@/lib/components/Card/CardHeader/CardHeader';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import Heading from '@/lib/components/Heading/Heading';
import { IconExternalLinkOff } from '@tabler/icons-react';
import GlobeIcon from '../GlobeIcon';
import Link from '@/lib/components/Link/Link';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';
import Text from '@/lib/components/Text/Text';

import linkOverlayStyles from '../../../lib/styles/util-classes/link-overlay.module.scss';

function LinkDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Link Component
      </Heading>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <DemoContainer>
        <Link href="#">Primary color</Link>
        <Link href="#" color="inherit">
          Inherit color
        </Link>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Underline</Heading>
      <DemoContainer>
        <Link href="#">None</Link>
        <Link href="#" underline="hover">
          Hover
        </Link>
        <Link href="#" underline="always">
          Always
        </Link>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">External</Heading>
      <DemoContainer>
        <Link href="#" isExternal>
          External
        </Link>
        <Link href="#" color="inherit" isExternal>
          External inherit color
        </Link>
        <Link href="#" isExternal externalIcon={false}>
          External no icon
        </Link>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes (changed by `Text` component)</Heading>
      <DemoContainer>
        <Text size="sm">
          <Link href="#">Small</Link>
        </Text>
        <Text size="md">
          <Link href="#">Medium</Link>
        </Text>
        <Text size="lg">
          <Link href="#">Large</Link>
        </Text>
        <Text size="xl">
          <Link href="#">X-Large</Link>
        </Text>
      </DemoContainer>
      <DemoContainer>
        <Text size="sm">
          <Link href="#">
            <GlobeIcon /> SvgIcon
          </Link>
        </Text>
        <Text size="md">
          <Link href="#">
            <GlobeIcon /> SvgIcon
          </Link>
        </Text>
        <Text size="lg">
          <Link href="#">
            <GlobeIcon /> SvgIcon
          </Link>
        </Text>
        <Text size="xl">
          <Link href="#">
            <GlobeIcon /> SvgIcon
          </Link>
        </Text>
      </DemoContainer>
      <DemoContainer>
        <Text size="sm">
          <Link href="#">
            <MaterialSymbolIcon icon="settings" /> Material Icon
          </Link>
        </Text>
        <Text size="md">
          <Link href="#">
            <MaterialSymbolIcon icon="settings" /> Material Icon
          </Link>
        </Text>
        <Text size="lg">
          <Link href="#">
            <MaterialSymbolIcon icon="settings" /> Material Icon
          </Link>
        </Text>
        <Text size="xl">
          <Link href="#">
            <MaterialSymbolIcon icon="settings" /> Material Icon
          </Link>
        </Text>
      </DemoContainer>
      <DemoContainer>
        <Text size="sm">
          <Link href="#">
            <IconExternalLinkOff /> Tabler Icon
          </Link>
        </Text>
        <Text size="md">
          <Link href="#">
            <IconExternalLinkOff /> Tabler Icon
          </Link>
        </Text>
        <Text size="lg">
          <Link href="#">
            <IconExternalLinkOff /> Tabler Icon
          </Link>
        </Text>
        <Text size="xl">
          <Link href="#">
            <IconExternalLinkOff /> Tabler Icon
          </Link>
        </Text>
      </DemoContainer>
      <DemoContainer>
        <Text size="sm">
          <Link href="#" isExternal>
            Small
          </Link>
        </Text>
        <Text size="md">
          <Link href="#" isExternal>
            Medium
          </Link>
        </Text>
        <Text size="lg">
          <Link href="#" isExternal>
            Large
          </Link>
        </Text>
        <Text size="xl">
          <Link href="#" isExternal>
            X-Large
          </Link>
        </Text>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Inside text</Heading>
      <Text>
        Here is a text paragraph and a <Link href="#">link</Link> inside it.
      </Text>
      <Divider />
      <Heading variant="h6">Overlay</Heading>
      <Card
        variant="elevated"
        className={linkOverlayStyles.overlay}
        interactiveStyle
      >
        <CardHeader divider="middle">
          <Heading variant="subtitle-md">
            <Link href="/docs/components/card" overlay>
              To Card
            </Link>{' '}
            or <Link href="/">Home</Link>
          </Heading>
        </CardHeader>
        <CardBody gap="sm">
          <Text>Link overlay usage example.</Text>
          <Text>Only header is an overlay</Text>
        </CardBody>
        <CardFooter>
          <Text>
            Some info. Another{' '}
            <Link href="#" isExternal>
              link
            </Link>
            .
          </Text>
        </CardFooter>
      </Card>
    </DemoSection>
  );
}

export default LinkDocsPage;
