import { ReactElement, AriaAttributes, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './ListingDetail.module.scss';

export const ListingDetail = ({ className, ...props }: ListingDetailProps) => (
  <div className={cn(styles.root, className)} {...props} />
);

export type ListingDetailProps = {
  className?: string;
  children?: ReactElement | ReactElement[] | string;
} & AriaAttributes &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
