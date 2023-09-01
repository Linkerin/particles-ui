import classNames from 'classnames';

import Heading from '@/app/_components/Heading/Heading';

import styles from './PaletteDocsPage.module.scss';
import { PuiColorNames } from '@/app/_lib/types';

const colors: Array<Exclude<PuiColorNames, 'uncolored'> | 'neutral'> = [
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'info',
  'success',
  'warning',
  'error'
];

const tones = [
  0, 5, 10, 12, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 92, 95, 97, 99, 100
];

function PaletteDocsPage() {
  return (
    <section className={styles.container}>
      <Heading as="h1" variant="h4">
        Pallete
      </Heading>
      <Heading variant="h6">Light mode colors</Heading>
      <section className={styles['palette-container']}>
        {colors.map(color => (
          <section key={color}>
            {tones.map(tone => (
              <div
                key={`${color}-${tone}`}
                className={classNames(styles.color, styles[`${color}-${tone}`])}
              >
                {tone}
              </div>
            ))}
            <Heading as="h3" variant="subtitle-md">
              {color}
            </Heading>
          </section>
        ))}
      </section>
      <Heading variant="h6">Dark mode colors</Heading>
      <section className={styles['palette-container']}>
        {colors.map(color => (
          <section key={color}>
            {tones.map(tone => (
              <div
                key={`${color}-${tone}-dark`}
                className={classNames(
                  styles.color,
                  styles[`${color}-${tone}-dark`]
                )}
              >
                {tone}
              </div>
            ))}
            <Heading as="h3" variant="subtitle-md">
              {`${color}-dark`}
            </Heading>
          </section>
        ))}
      </section>
    </section>
  );
}

export default PaletteDocsPage;
