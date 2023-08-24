import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconArticleFilledFilled as ArticleIcon } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';
import Text from '@/app/_components/Text/Text';

function TextDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Text Component
      </Heading>
      <Divider />
      <Heading variant="h6">Sizes</Heading>
      <DemoContainer>
        <div>
          <Text variant="label" size="sm">
            Label text, sm font size.
          </Text>
          <Text variant="label" size="md">
            Label text, md font size.
          </Text>
          <Text variant="label" size="lg">
            Label text, lg font size.
          </Text>
          <Text variant="label" size="xl">
            Label text, xl font size.
          </Text>
        </div>
        <div>
          <Text size="sm">Body text, sm font size.</Text>
          <Text size="md">Body text, md font size.</Text>
          <Text size="lg">Body text, lg font size.</Text>
          <Text size="xl">Body text, xl font size.</Text>
        </div>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">With icons</Heading>
      <Heading as="h3" variant="subtitle-md">
        Material Symbol
      </Heading>
      <DemoContainer>
        <div>
          <Text variant="label" size="sm">
            <MaterialSymbolIcon icon="search" /> search Material Symbol icon
            Label sm
          </Text>
          <Text variant="label" size="md">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Label md
          </Text>
          <Text variant="label" size="lg">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Label lg
          </Text>
          <Text variant="label" size="xl">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Label xl
          </Text>
        </div>
        <div>
          <Text size="sm">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Body sm
          </Text>
          <Text size="md">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Body md
          </Text>
          <Text size="lg">
            <MaterialSymbolIcon icon="search" /> Material Symbol icon Body lg
          </Text>
          <Text size="xl">
            <MaterialSymbolIcon icon="search" /> Sunny Material Symbol icon Body
            xl
          </Text>
        </div>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        SvgIcon
      </Heading>
      <DemoContainer>
        <div>
          <Text variant="label" size="sm">
            <GlobeIcon /> SvgIcon Label sm
          </Text>
          <Text variant="label" size="md">
            <GlobeIcon /> SvgIcon Label md
          </Text>
          <Text variant="label" size="lg">
            <GlobeIcon /> SvgIcon Label lg
          </Text>
          <Text variant="label" size="xl">
            <GlobeIcon /> SvgIcon Label xl
          </Text>
        </div>
        <div>
          <Text size="sm">
            <GlobeIcon /> SvgIcon Body sm
          </Text>
          <Text size="md">
            <GlobeIcon /> SvgIcon Body md
          </Text>
          <Text size="lg">
            <GlobeIcon /> SvgIcon Body lg
          </Text>
          <Text size="xl">
            <GlobeIcon /> SvgIcon Body xl
          </Text>
        </div>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Tabler icons
      </Heading>
      <DemoContainer>
        <div>
          <Text variant="label" size="sm">
            <ArticleIcon /> Tabler icon Label sm
          </Text>
          <Text variant="label" size="md">
            <ArticleIcon /> Tabler icon Label md
          </Text>
          <Text variant="label" size="lg">
            <ArticleIcon /> Tabler icon Label lg
          </Text>
          <Text variant="label" size="xl">
            <ArticleIcon /> Tabler icon Label xl
          </Text>
        </div>
        <div>
          <Text size="sm">
            <ArticleIcon /> Tabler icon Body sm
          </Text>
          <Text size="md">
            <ArticleIcon /> Tabler icon Body md
          </Text>
          <Text size="lg">
            <ArticleIcon /> Tabler icon Body lg
          </Text>
          <Text size="xl">
            <ArticleIcon /> Tabler icon Body xl
          </Text>
        </div>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <>
        <Text size="lg" color="on-background">
          <GlobeIcon /> On background
        </Text>
        <Text size="lg" color="on-background-variant">
          <GlobeIcon /> On background variant
        </Text>
        <Text size="lg" color="on-primary">
          <GlobeIcon /> On primary
        </Text>
        <Text size="lg" color="on-primary-container">
          <GlobeIcon /> On primary container
        </Text>
        <Text size="lg" color="on-secondary">
          <MaterialSymbolIcon icon="delete" /> On secondary
        </Text>
        <Text size="lg" color="on-secondary-container">
          <MaterialSymbolIcon icon="delete" /> On secondary container
        </Text>
        <Text size="lg" color="on-tertiary">
          <MaterialSymbolIcon icon="delete" /> On tertiary
        </Text>
        <Text size="lg" color="on-tertiary-container">
          <MaterialSymbolIcon icon="delete" /> On tertiary container
        </Text>
      </>
      <Divider />
      <Heading variant="h6">Rendering element</Heading>
      <>
        <Text as="p">Paragraph</Text>
        <Text as="span">span</Text>
        <Text as="b">Bold</Text>
        <Text as="i">Italic</Text>
        <Text as="u">Underline</Text>
        <Text as="abbr">ABBR</Text>
        <Text as="code">&lt;code here /&gt;</Text>
        <Text as="cite">Citation</Text>
        <Text as="del">Deleted</Text>
        <Text as="em">Emphasis</Text>
        <Text as="ins">Inserted</Text>
        <div style={{ display: 'flex' }}>
          <Text as="kbd">Ctrl</Text>
          <Text>&nbsp;+&nbsp;</Text>
          <Text as="kbd">C</Text>
        </div>
        <Text as="mark">Highlighted</Text>
        <Text as="s">Strikethrough</Text>
        <Text as="samp">Sample</Text>
        <Text as="sub">sub</Text>
        <Text as="sup">sup</Text>
      </>
    </DemoSection>
  );
}

export default TextDocsPage;
