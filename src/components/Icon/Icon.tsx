import { ReactElement } from 'react';
import cn from 'classnames';

// Start Menu Icons
import { ReactComponent as SortDecending } from 'components/Icon/assets/sort-decending.svg';
import { ReactComponent as NoSVG } from 'components/Icon/assets/no-svg.svg';
import { ReactComponent as SortAscending } from './assets/sort-ascending.svg';
import styles from './Icon.module.scss';

// List of available icons used in Storybook
export const iconTypes = ['arrow-up', 'arrow-down'] as const;

export type IconType = typeof iconTypes[number];

export interface IconProps {
  /**
   * The name of the icon to load as inline SVG
   */
  type: IconType;

  /**
   * Text that is set as the title attribute of the SVG
   */
  alt?: string;
  /**
   * If active additional class is added to allow elements in SVG to change color.
   * Not all icons have an active state, changing this status will have no visual change.
   */
  isActive?: boolean;
  className?: string;
}

export const pickIcon = (type: IconType) => {
  switch (type) {
    case 'arrow-up':
      return SortAscending;
    case 'arrow-down':
      return SortDecending;
    default:
      return NoSVG;
  }
};

export const Icon = ({
  alt,
  isActive = false,
  type,
  className
}: IconProps): ReactElement => {
  const SVG = pickIcon(type);
  const rootClassList = cn(className, styles['svg-wrapper'], {
    [styles.active]: isActive
  });
  if (type === undefined) return <span aria-hidden />;

  return (
    <span className={rootClassList} aria-hidden={!alt}>
      <SVG role='img' className={styles.svg} title={alt} aria-hidden={!alt} />
    </span>
  );
};
