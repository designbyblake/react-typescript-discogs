import { BackgroundImage } from 'components/BackgroundImage';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import background from 'assets/images/background-login.jpeg';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { useNavigate } from 'react-router-dom';

export const SelectUser = () => {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    // alert(JSON.stringify(data));
    navigate(`/collection/${data.userName}`);
  };
  return (
    <>
      <BackgroundImage bgImage={background} />
      <div className='container'>
        <Heading headingLevel='h1' className='shadow-text'>
          View Discogs User Collection
        </Heading>
        <Form<FormValues> onSubmit={onSubmit}>
          {({ register }) => (
            <>
              <Input
                label='Discogs User Name'
                {...register('userName')}
                required
              />
              <Button type='submit'>Submit</Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
};

type FormValues = {
  userName: string;
};
