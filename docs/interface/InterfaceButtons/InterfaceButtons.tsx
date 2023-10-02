import classNames from 'classnames';

import { ButtonProps } from '../../../src/components/Button/Button';
import GithubButton from './Buttons/GithubButton';
import StorybookButton from './Buttons/StorybookButton';
import W3CButton from './Buttons/W3CButton';

import styles from './InterfaceButtons.module.css';

interface InterfaceButtonsProps extends ButtonProps {
  githubLink?: string;
  storybookLink?: string;
  w3cLink?: string;
}

function InterfaceButtons({
  className,
  storybookLink,
  githubLink,
  w3cLink,

  ...props
}: InterfaceButtonsProps) {
  return (
    <div className={classNames(styles['interface-buttons'], className)}>
      {githubLink && <GithubButton link={githubLink} {...props} />}
      {storybookLink && <StorybookButton link={storybookLink} {...props} />}
      {w3cLink && <W3CButton link={w3cLink} {...props} />}
    </div>
  );
}

export default InterfaceButtons;
