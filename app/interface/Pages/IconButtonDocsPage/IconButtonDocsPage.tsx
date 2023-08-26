import DemoSection from '../../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import Heading from '@/app/_components/Heading/Heading';
import IconButtonClickable from './subsections/IconButtonClickable';
import IconButtonStandard from './subsections/IconButtonStandard';
import IconButtonFilled from './subsections/IconButtonFilled';
import IconButtonOutlined from './subsections/IconButtonOutlined';
import IconButtonSoft from './subsections/IconButtonSoft';
import IconButtonElevated from './subsections/IconButtonElevated';
import IconButtonRadiuses from './subsections/IconButtonRadiuses';
import IconButtonSizes from './subsections/IconButtonSizes';

function IconButtonDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        IconButton Component
      </Heading>
      <Divider />
      <IconButtonClickable />
      <Divider />
      <Heading variant="h5">Variants</Heading>
      <IconButtonStandard />
      <IconButtonFilled />
      <IconButtonOutlined />
      <IconButtonSoft />
      <IconButtonElevated />
      <Divider />
      <IconButtonRadiuses />
      <Divider />
      <IconButtonSizes />
    </DemoSection>
  );
}

export default IconButtonDocsPage;
