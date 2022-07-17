import { Heading } from 'components/Heading';
import styles from './CollectionHeader.module.scss';

export const CollectionHeader = ({
  userName,
  collectionSize,
  collectionLength,
  isLoading,
  isError
}: CollectionHeaderProps) => {
  const usernameCollection = `${userName}'s Collection`;
  let heading =
    collectionSize === collectionLength
      ? usernameCollection
      : `Loading ${usernameCollection}`;
  if (isLoading) heading = `Gathering ${usernameCollection}`;
  if (isError) heading = 'Something has gone wrong';

  return (
    <header className={styles.root}>
      <Heading headingLevel='h1' aria-live='polite'>
        {heading}
      </Heading>
      {!isError &&
        !isLoading &&
        (collectionSize === collectionLength ? (
          <p>Collection Size, {collectionSize}</p>
        ) : (
          <p>
            {collectionLength} out of {collectionSize} loaded
          </p>
        ))}
    </header>
  );
};

export type CollectionHeaderProps = {
  userName: string | undefined;
  collectionSize: number | undefined;
  collectionLength: number | undefined;
  isLoading: boolean;
  isError: boolean;
};
