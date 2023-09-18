'use client';

import { Fragment } from 'react';

import Avatar, { AvatarProps } from '@/lib/components/Avatar/Avatar';
import AvatarGroup from '@/lib/components/AvatarGroup/AvatarGroup';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/lib/components/Heading/Heading';
import { IconUser } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

import avatar1 from '@/public/avatar.jpg';
import avatar2 from '@/public/avatar-2.jpeg';
import avatar3 from '@/public/avatar-3.jpeg';
import avatar4 from '@/public/avatar-4.jpeg';

const avatarLink = 'https://avatars.githubusercontent.com/u/130695447?v=4';
const bigImgLink =
  'https://img.freepik.com/free-photo/big-waves-stormy-ocean-with-sun-rays-pouring-through-water-sunrise-sunset-clouds-background_90220-1129.jpg?w=1380&t=st=1693296597~exp=1693297197~hmac=73d2a6e33d750b3ffae89a7895fa8271a2ee5a1f38517ccc33b57a0e101372a6';

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
              alt={`Globe svg icon, size ${size}`}
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
              alt={`Material Symbol icon, size ${size}`}
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
              alt={`Tabler icon, size ${size}`}
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
      <Heading variant="h6">Outside link</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {sizes.map(size => (
          <Avatar
            key={size}
            src={avatarLink}
            alt={`Github avatar, size ${size}`}
            title={`Size: ${size}`}
            size={size}
          />
        ))}
      </DemoContainer>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {sizes.map(size => (
          <Avatar
            key={size}
            src={bigImgLink}
            alt={`Freepik big image, size ${size}`}
            title={`Size: ${size}`}
            size={size}
          />
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Fallbacks</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Avatar alt="Only default icon" icon="default" />
        <Avatar
          src="./broken"
          alt="Broken link"
          onError={() => {
            console.warn('Load failed: Broken link');
          }}
        />
        <Avatar
          src="./broken"
          alt="Broken link no fallback"
          fallback={false}
          onError={() => {
            console.warn('Load failed: Broken link no fallback');
          }}
        />
        <Avatar
          src="./broken"
          alt="Broken link image fallback"
          fallbackSrc={'https://via.placeholder.com/40'}
          radius="none"
          onError={() => {
            console.warn('Load failed: Broken link image fallback');
          }}
        />
        <Avatar src="./broken" alt="Broken link with name" name="Kate" />
        <Avatar
          src="./broken"
          alt="Broken link with name and fallback"
          fallback={<MaterialSymbolIcon icon="headphones" />}
          name="Kate"
          onError={() => {
            console.warn('Load failed: Broken link with name and fallback');
          }}
        />
        <Avatar
          src="./broken"
          alt="Broken link with name and fallback element and noFallback"
          fallback={<MaterialSymbolIcon icon="headphones" />}
          name="Kate"
          onError={() => {
            console.warn(
              'Load failed: Broken link with name and fallback element and noFallback'
            );
          }}
        />
        <Avatar
          src={avatar3.src}
          alt="Normal image, avatar-3, icon fallback"
          fallback={<MaterialSymbolIcon icon="headphones" />}
          name="Ed"
        />
        <Avatar
          src={avatar3.src}
          alt="Normal image, avatar-3, with name"
          name="Ed"
        />
      </DemoContainer>
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
          <Fragment key={color}>
            <Heading as="h3" variant="subtitle-md">
              {color}
            </Heading>
            <DemoContainer style={{ flexWrap: 'wrap' }}>
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
                alt={`Globe svg icon,  color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
              />
              <Avatar
                icon={<MaterialSymbolIcon icon="account_circle" />}
                alt={`Material Symbol icon, color: ${color}`}
                title={`Color: ${color}`}
                size="lg"
                color={color}
              />
              <Avatar
                icon={<IconUser />}
                alt={`Tabler icon, color: ${color}`}
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
          </Fragment>
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
            alt={`Globe svg icon,  color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            disabled
          />
          <Avatar
            icon={<MaterialSymbolIcon icon="account_circle" />}
            alt={`Material Symbol icon, color: disabled`}
            title={`Color: disabled`}
            size="lg"
            color="tertiary"
            disabled
          />
          <Avatar
            icon={<IconUser />}
            alt={`Tabler icon, color: disabled`}
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
          <Fragment key={size}>
            <Heading as="h3" variant="subtitle-md">
              {size}
            </Heading>
            <DemoContainer style={{ flexWrap: 'wrap' }}>
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
          </Fragment>
        ))}
      </>
      <Divider />
      <>
        <Heading variant="h6">Avatar group</Heading>
        <Heading as="h3" variant="subtitle-md">
          Medium size
        </Heading>
        <DemoContainer>
          <AvatarGroup max={3}>
            <Avatar src={avatar1.src} alt="grouped avatar" />
            <Avatar src={avatar2.src} alt="grouped avatar" />
            <Avatar src={avatar3.src} alt="grouped avatar" />
            <Avatar src={avatar4.src} alt="grouped avatar" />
          </AvatarGroup>
        </DemoContainer>
        <Heading as="h3" variant="subtitle-md">
          XXL size
        </Heading>
        <DemoContainer>
          <AvatarGroup max={3} counterAvatarProps={{ size: 'xxl' }}>
            <Avatar size="xxl" src={avatar1.src} alt="grouped avatar" />
            <Avatar size="xxl" src={avatar2.src} alt="grouped avatar" />
            <Avatar size="xxl" src={avatar3.src} alt="grouped avatar" />
            <Avatar size="xxl" src={avatar4.src} alt="grouped avatar" />
          </AvatarGroup>
        </DemoContainer>
      </>
      <Heading as="h3" variant="subtitle-md">
        Bordered
      </Heading>
      <DemoContainer>
        <AvatarGroup max={3} counterAvatarProps={{ bordered: true }}>
          <Avatar
            bordered
            src={avatar1.src}
            alt="grouped avatar"
            wrapperProps={{
              style: { backgroundColor: 'var(--pui-primary-container-low' }
            }}
          />
          <Avatar
            bordered
            src={avatar2.src}
            alt="grouped avatar"
            wrapperProps={{
              style: { backgroundColor: 'var(--pui-primary-container-low' }
            }}
          />
          <Avatar
            bordered
            src={avatar3.src}
            alt="grouped avatar"
            wrapperProps={{
              style: { backgroundColor: 'var(--pui-primary-container-low' }
            }}
          />
          <Avatar
            bordered
            src={avatar4.src}
            alt="grouped avatar"
            wrapperProps={{
              style: { backgroundColor: 'var(--pui-primary-container-low' }
            }}
          />
        </AvatarGroup>
      </DemoContainer>
      <Heading as="h3" variant="subtitle-md">
        Right-to-left
      </Heading>
      <DemoContainer>
        <AvatarGroup
          max={3}
          direction="rtl"
          counterAvatarProps={{ size: 'lg' }}
        >
          <Avatar size="lg" src={avatar1.src} alt="grouped avatar" />
          <Avatar size="lg" src={avatar2.src} alt="grouped avatar" />
          <Avatar size="lg" src={avatar3.src} alt="grouped avatar" />
          <Avatar size="lg" src={avatar4.src} alt="grouped avatar" />
        </AvatarGroup>
      </DemoContainer>
    </DemoSection>
  );
}

export default AvatarDocsPage;
