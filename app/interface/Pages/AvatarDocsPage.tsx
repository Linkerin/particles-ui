'use client';

import Avatar, { AvatarProps } from '@/app/_components/Avatar/Avatar';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconUser } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

import avatar1 from '@/public/avatar.jpg';
import avatar2 from '@/public/avatar-2.jpeg';
import avatar3 from '@/public/avatar-3.jpeg';
import avatar4 from '@/public/avatar-4.jpeg';

const colors: Array<AvatarProps['color']> = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error',
  'uncolored'
];

const radiuses: Array<AvatarProps['radius']> = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'full'
];

const sizes: Array<AvatarProps['size']> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

function AvatarDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Avatar Component
      </Heading>
      <Divider />
      <>
        <Heading variant="h6">Sizes</Heading>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              src={avatar1.src}
              alt={`First avatar photo, size ${size}`}
              title={`Size: ${size}`}
              size={size}
            />
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              icon={<GlobeIcon />}
              iconLabel={`Globe svg icon, size ${size}`}
              title={`Size: ${size}`}
              size={size}
            />
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              icon={<MaterialSymbolIcon icon="account_circle" />}
              iconLabel={`Material Symbol icon, size ${size}`}
              title={`Size: ${size}`}
              size={size}
            />
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              icon={<IconUser />}
              iconLabel={`Tabler icon, size ${size}`}
              title={`Size: ${size}`}
              size={size}
            />
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              alt={`Name only, size ${size}`}
              title={`Size: ${size}`}
              size={size}
              name="John Dorian"
            />
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Bordered</Heading>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              src={avatar1.src}
              alt={`First avatar photo, size ${size}`}
              title={`Size: ${size}`}
              size={size}
              bordered
            />
          ))}
        </DemoContainer>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Avatar
              key={size}
              alt={`Name only, size ${size}`}
              title={`Size: ${size}`}
              size={size}
              name="John Dorian"
              bordered
            />
          ))}
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Colors</Heading>
        {colors.map(color => (
          <>
            <Heading as="h3" variant="subtitle-md">
              {color}
            </Heading>
            <DemoContainer key={color} style={{ flexWrap: 'wrap' }}>
              <Avatar
                src={avatar4.src}
                alt={`First avatar photo, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
              />
              <Avatar
                src={avatar4.src}
                alt={`First bordered avatar photo, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
                bordered
              />
              <Avatar
                icon={<GlobeIcon />}
                iconLabel={`Globe svg icon,  color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
              />
              <Avatar
                icon={<MaterialSymbolIcon icon="account_circle" />}
                iconLabel={`Material Symbol icon, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
              />
              <Avatar
                icon={<IconUser />}
                iconLabel={`Tabler icon, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
                bordered
              />
              <Avatar
                alt={`Name only, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
                name="John Dorian"
              />
            </DemoContainer>
          </>
        ))}
      </>
      <Divider />
      <>
        <Heading variant="h6">Disabled</Heading>
        <DemoContainer style={{ flexWrap: 'wrap' }}>
          <Avatar
            src={avatar1.src}
            alt={`First avatar photo, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            disabled
          />
          <Avatar
            src={avatar1.src}
            alt={`First bordered avatar photo, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            bordered
            disabled
          />
          <Avatar
            icon={<GlobeIcon />}
            iconLabel={`Globe svg icon,  color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            disabled
          />
          <Avatar
            icon={<MaterialSymbolIcon icon="account_circle" />}
            iconLabel={`Material Symbol icon, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            disabled
          />
          <Avatar
            icon={<IconUser />}
            iconLabel={`Tabler icon, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            bordered
            disabled
          />
          <Avatar
            alt={`Name only, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            name="John Dorian"
            disabled
          />
        </DemoContainer>
      </>
      <Divider />
      <>
        <Heading variant="h6">Radiuses</Heading>
        {sizes.map(size => (
          <>
            <Heading as="h3" variant="subtitle-md">
              {size}
            </Heading>
            <DemoContainer key={size} style={{ flexWrap: 'wrap' }}>
              {radiuses.map(radius => (
                <Avatar
                  key={radius}
                  src={avatar2.src}
                  alt={`First avatar photo, radius: ${radius}`}
                  title={`Radius: ${radius}`}
                  size={size}
                  radius={radius}
                  bordered
                />
              ))}
            </DemoContainer>
          </>
        ))}
      </>
    </DemoSection>
  );
}

export default AvatarDocsPage;
