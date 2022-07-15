import { Heading } from 'components/Heading';
import styles from './CollectionHeader.module.scss';

export const CollectionHeader = ({
  userName,
  collectionSize,
  collectionLength
}: CollectionHeaderProps) => {
  return (
    <header className={styles.root}>
      <Heading headingLevel='h1'>{userName}&#39;s Collection</Heading>
      {collectionSize === collectionLength ? (
        <p>Collection Size, {collectionSize}</p>
      ) : (
        <p>
          {collectionLength} out of {collectionSize} loaded
        </p>
      )}
    </header>
  );
};

export type CollectionHeaderProps = {
  userName: string | undefined;
  collectionSize: number | undefined;
  collectionLength: number | undefined;
};
