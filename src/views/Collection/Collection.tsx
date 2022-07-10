import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoadCollection } from 'hooks/useLoadCollection/useLoadCollection';
import { BackgroundImage } from 'components/BackgroundImage';
import { Listing } from 'components/Listing';
import cn from 'classnames';
import styles from './Collection.module.scss';

export const Collection = () => {
  const { userName } = useParams();
  const { collection, loading } = useLoadCollection(userName || '');

  useEffect(() => {
    console.log(collection);
  }, [collection]);

  if (loading) {
    return <h1>Is loading</h1>;
  }

  return (
    <>
      <BackgroundImage />
      <div className={cn(styles.root, 'container')}>
        <ul data-element='collection'>
          {collection?.map((record) => {
            return (
              <li
                key={`${record.instance_id}-${record.date_added}`}
                style={{ maxWidth: '320px' }}
              >
                <Listing basicInformation={record.basic_information} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
