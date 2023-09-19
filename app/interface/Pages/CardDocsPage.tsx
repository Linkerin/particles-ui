'use client';

import { Button, ButtonProps } from '@/lib/components/Button/Button';
import { Card } from '@/lib/components/Card/Card';
import { CardHeader } from '@/lib/components/Card/CardHeader/CardHeader';
import { CardBody } from '@/lib/components/Card/CardBody/CardBody';
import { CardFooter } from '@/lib/components/Card/CardFooter/CardFooter';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import { Divider } from '@/lib/components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import { Heading } from '@/lib/components/Heading/Heading';
import { Text } from '@/lib/components/Text/Text';

function CardBodyContent({
  firstLine = 'Some example text of the card content.'
}: {
  firstLine?: string;
}) {
  return (
    <>
      <Text>{firstLine}</Text>
      <Text>Do. Or do not. There is no try.</Text>
      <Text>May the Force be with you.</Text>
    </>
  );
}

function CardFooterContent({
  rightIcon,
  disabled = false,
  variant = 'filled'
}: Pick<ButtonProps, 'disabled' | 'rightIcon' | 'variant'>) {
  return (
    <Button
      disabled={disabled}
      rightIcon={rightIcon}
      variant={variant}
      onClick={() => {
        console.log('Button clicked');
      }}
    >
      Accept
    </Button>
  );
}

function CardDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Card Component
      </Heading>
      <DemoContainer>
        <Card>
          <CardHeader>
            <Heading variant="subtitle-lg">Filled Card</Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent />
          </CardFooter>
        </Card>
        <Card
          onClick={e => {
            console.log('Filled card clicked');
          }}
          aria-label="Filled action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Filled Clickable Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent rightIcon={<GlobeIcon />} />
          </CardFooter>
        </Card>
        <Card
          onClick={e => {
            console.log('Disabled filled card clicked');
          }}
          disabled
          aria-label="Filled action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Filled Disabled Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent firstLine="Don't forget to disable all action elements inside the card!" />
          </CardBody>
          <CardFooter>
            <CardFooterContent disabled />
          </CardFooter>
        </Card>
      </DemoContainer>
      <DemoContainer>
        <Card variant="elevated">
          <CardHeader>
            <Heading variant="subtitle-lg">Elevated Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" />
          </CardFooter>
        </Card>
        <Card
          variant="elevated"
          onClick={e => {
            console.log('Elevated card clicked');
          }}
          aria-label="Elevated action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Elevated Clickable Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" />
          </CardFooter>
        </Card>
        <Card
          variant="elevated"
          onClick={e => {
            console.log('Disabled elevated card clicked');
          }}
          disabled
          aria-label="Elevated action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Elevated Disabled Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent firstLine="Don't forget to disable all action elements inside the card!" />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" disabled />
          </CardFooter>
        </Card>
      </DemoContainer>
      <DemoContainer>
        <Card variant="outlined">
          <CardHeader>
            <Heading variant="subtitle-lg">Outlined Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="outlined" />
          </CardFooter>
        </Card>
        <Card
          variant="outlined"
          onClick={e => {
            console.log('Outlined card clicked');
          }}
          aria-label="Outlined action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Outlined Clickable Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="outlined" />
          </CardFooter>
        </Card>
        <Card
          variant="outlined"
          onClick={e => {
            console.log('Disabled outlined card clicked');
          }}
          disabled
          aria-label="Outlined action card"
        >
          <CardHeader>
            <Heading variant="subtitle-lg">Outlined Disabled Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent firstLine="Don't forget to disable all action elements inside the card!" />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="outlined" disabled />
          </CardFooter>
        </Card>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">With dividers</Heading>
      <DemoContainer>
        <Card variant="outlined">
          <CardHeader divider="middle">
            <Heading variant="subtitle-lg">Middle dividers </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter divider="middle">
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
        <Card variant="outlined">
          <CardHeader divider="inset">
            <Heading variant="subtitle-lg">Inset dividers </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter divider="inset">
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
        <Card variant="outlined">
          <CardHeader divider="full">
            <Heading variant="subtitle-lg">Full dividers</Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter divider="full">
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
      </DemoContainer>
      <DemoContainer>
        <Card variant="outlined">
          <CardHeader
            divider="middle"
            style={{ borderColor: 'var(--pui-info)' }}
          >
            <Heading variant="subtitle-lg">Middle dividers </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter
            divider="middle"
            style={{ borderColor: 'var(--pui-success)' }}
          >
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
        <Card variant="outlined">
          <CardHeader
            divider="inset"
            style={{ borderColor: 'var(--pui-tertiary)' }}
          >
            <Heading variant="subtitle-lg">Inset dividers </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter
            divider="inset"
            style={{ borderColor: 'var(--pui-primary-darker)' }}
          >
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
        <Card variant="outlined">
          <CardHeader divider="full" style={{ borderColor: 'green' }}>
            <Heading variant="subtitle-lg">Full dividers</Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter
            divider="full"
            style={{ borderColor: 'var(--pui-error)' }}
          >
            <CardFooterContent variant="soft" />
          </CardFooter>
        </Card>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer>
        <Card size="sm" variant="elevated">
          <CardHeader>
            <Heading variant="subtitle-lg">Small Card </Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" />
          </CardFooter>
        </Card>
        <Card variant="elevated">
          <CardHeader>
            <Heading variant="subtitle-lg">Middle Card</Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" />
          </CardFooter>
        </Card>
        <Card size="lg" variant="elevated">
          <CardHeader>
            <Heading variant="subtitle-lg">Large Card</Heading>
          </CardHeader>
          <CardBody gap="sm">
            <CardBodyContent />
          </CardBody>
          <CardFooter>
            <CardFooterContent variant="elevated" />
          </CardFooter>
        </Card>
      </DemoContainer>
    </DemoSection>
  );
}

export default CardDocsPage;
