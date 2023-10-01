import { Avatar } from '@/src/components/Avatar/Avatar';
import { Badge, BadgeProps } from '@/src/components/Badge/Badge';
import { BadgeInline } from '@/src/components/BadgeInline/BadgeInline';
import BadgeInvisible from './BadgeInvisible';
import { Button } from '@/src/components/Button/Button';
import { Chip } from '@/src/components/Chip/Chip';
import DemoContainer from '../../DemoContainer';
import DemoSection from '../../DemoSection';
import { Divider } from '@/src/components/Divider/Divider';
import GlobeIcon from '../../GlobeIcon';
import { Heading } from '@/src/components/Heading/Heading';
import { IconBell } from '@tabler/icons-react';
import { MaterialSymbolIcon } from '@/src/components/MaterialSymbolIcon/MaterialSymbolIcon';

import avatar2 from '@/public/avatar-2.jpeg';
import avatar4 from '@/public/avatar-4.jpeg';

const avatarLink = 'https://avatars.githubusercontent.com/u/130695447?v=4';

const colors: Array<BadgeProps['color']> = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error',
  'uncolored'
];

const radiuses: Array<BadgeProps['radius']> = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'full'
];

const sizes: Array<BadgeProps['size']> = ['dot', 'sm', 'md', 'lg'];

function BadgeDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Badge Component
      </Heading>
      <Divider />
      <>
        <Heading variant="h6">Variants</Heading>
        <Heading as="h3" variant="subtitle-md">
          Filled
        </Heading>
        <DemoContainer>
          {colors.map(color => (
            <Badge
              key={color}
              aria-label={`Filled, ${color}`}
              color={color}
              content="12"
              shape="circle"
            >
              <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
            </Badge>
          ))}
        </DemoContainer>
        <DemoContainer>
          {colors.map(color => (
            <Badge
              key={color}
              aria-label={`Soft, ${color}`}
              color={color}
              variant="soft"
              content="21"
            >
              <Avatar
                src={avatar2.src}
                alt={'Profile photo'}
                size="lg"
                radius="md"
              />
            </Badge>
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Positions</Heading>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.125rem' }}>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            shape="circle"
            color="error"
          >
            <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            shape="circle"
            color="error"
            vertical="bottom"
          >
            <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            shape="circle"
            color="error"
            horizontal="left"
          >
            <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            shape="circle"
            color="error"
            vertical="bottom"
            horizontal="left"
          >
            <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
          </Badge>
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.125rem' }}>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            color="secondary"
          >
            <Avatar
              src={avatar4.src}
              alt={'Profile photo'}
              size="lg"
              radius="none"
            />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            color="secondary"
            vertical="bottom"
          >
            <Avatar
              src={avatar4.src}
              alt={'Profile photo'}
              size="lg"
              radius="none"
            />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            color="secondary"
            horizontal="left"
          >
            <Avatar
              src={avatar4.src}
              alt={'Profile photo'}
              size="lg"
              radius="none"
            />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="md"
            content="3"
            color="secondary"
            vertical="bottom"
            horizontal="left"
          >
            <Avatar
              src={avatar4.src}
              alt={'Profile photo'}
              size="lg"
              radius="none"
            />
          </Badge>
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
          <Badge
            aria-label="Number of new messages"
            size="sm"
            content="3"
            color="error"
          >
            <IconBell />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="sm"
            content="3"
            color="error"
            vertical="bottom"
          >
            <IconBell />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="sm"
            content="3"
            color="error"
            horizontal="left"
          >
            <IconBell />
          </Badge>
          <Badge
            aria-label="Number of new messages"
            size="sm"
            content="3"
            color="error"
            vertical="bottom"
            horizontal="left"
          >
            <IconBell />
          </Badge>
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Sizes</Heading>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.125rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content="1635"
              maxChars={3}
              shape="circle"
            >
              <Avatar
                src={avatar4.src}
                alt={`First avatar photo, size ${size}`}
                size="lg"
              />
            </Badge>
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.125rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content={1223.9}
              maxChars={3}
              variant="soft"
              color="success"
            >
              <Avatar
                src={avatar4.src}
                alt={`First avatar photo, size ${size}`}
                size="lg"
                radius="sm"
              />
            </Badge>
          ))}
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          Svg icons
        </Heading>
        <DemoContainer
          style={{ flexWrap: 'wrap', gap: '1.125rem', fontSize: '1.25rem' }}
        >
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content={123.9}
              maxChars={2}
            >
              <GlobeIcon />
            </Badge>
          ))}
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          Material icons
        </Heading>
        <DemoContainer
          style={{ flexWrap: 'wrap', gap: '1.125rem', fontSize: '1.25rem' }}
        >
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content={123.9}
              maxChars={2}
            >
              <MaterialSymbolIcon icon="shopping_cart" />
            </Badge>
          ))}
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          Tabler icons
        </Heading>
        <DemoContainer style={{ flexWrap: 'wrap', gap: '1.125rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content={123.9}
              maxChars={2}
            >
              <IconBell />
            </Badge>
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Icons content</Heading>
        <Heading as="h3" variant="subtitle-md">
          SvgIcon
        </Heading>
        <DemoContainer style={{ gap: '1rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label={`Svg Icon content, size: ${size}`}
              color="warning"
              content={<GlobeIcon />}
              size={size}
              singleElement
            >
              <Avatar
                src={avatarLink}
                alt={'Profile photo'}
                size="lg"
                radius="sm"
              />
            </Badge>
          ))}
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          Material Symbol icon
        </Heading>
        <DemoContainer style={{ gap: '1rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label={`Material Icon content, size: ${size}`}
              color="tertiary"
              variant="soft"
              content={<MaterialSymbolIcon icon="edit" />}
              size={size}
              singleElement
            >
              <Avatar
                src={avatarLink}
                alt={'Profile photo'}
                size="lg"
                radius="sm"
              />
            </Badge>
          ))}
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          Tabler icon
        </Heading>
        <DemoContainer style={{ gap: '1rem' }}>
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label={`Tabler icon content, size: ${size}`}
              color="success"
              content={
                <div>
                  <IconBell />
                </div>
              }
              size={size}
              singleElement
            >
              <Avatar
                src={avatarLink}
                alt={'Profile photo'}
                size="lg"
                radius="sm"
              />
            </Badge>
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Radiuses</Heading>
        <DemoContainer style={{ gap: '1rem' }}>
          {radiuses.map(radius => (
            <Badge
              key={radius}
              aria-label={`Radius: ${radius}`}
              color="warning"
              content="NEW USER"
              maxChars={3}
              shape="circle"
              radius={radius}
            >
              <Avatar src={avatar4.src} alt={'Profile photo'} size="lg" />
            </Badge>
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Outline</Heading>
        <DemoContainer
          style={{
            flexWrap: 'wrap',
            gap: '1.125rem',
            backgroundColor: 'var(--pui-background-container-high)',
            padding: '0.5rem'
          }}
        >
          {sizes.map(size => (
            <Badge
              key={size}
              aria-label="Number of new messages"
              size={size}
              content={1536}
              maxChars={3}
              shape="circle"
              outlined
            >
              <Avatar
                src={avatar2.src}
                alt={`First avatar photo, size ${size}`}
                size="lg"
              />
            </Badge>
          ))}
        </DemoContainer>
      </>
      <Divider />
      <Heading variant="h6">Inline badge</Heading>
      <DemoContainer>
        <Button variant="outlined" radius="sm">
          Show messages{' '}
          <BadgeInline
            aria-label="Messages number"
            content={16}
            radius="xs"
            variant="soft"
          />
        </Button>
        <Chip size="lg" radius="full" variant="elevated" color="tertiary">
          JavaScript{' '}
          <BadgeInline
            aria-label="New content"
            content="NEW"
            size="sm"
            color="tertiary"
          ></BadgeInline>
        </Chip>
      </DemoContainer>
      <Divider />
      <BadgeInvisible />
    </DemoSection>
  );
}

export default BadgeDocsPage;
