import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Form } from './Form';

describe('<Form/>', () => {
  const onSubmit = jest.fn();
  it('displays properly', () => {
    render(
      <Form onSubmit={onSubmit} className='test-class'>
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
    );

    const form = screen.getByTestId('form');
    const input = screen.getByLabelText('Discogs User Name');
    const button = screen.getByText(/Submit/i);

    // Form is rendered
    expect(form).toBeInTheDocument();

    // Children are rendered
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.tab();
    // Form elements recieve focus
    expect(input).toHaveFocus();
    userEvent.tab();
    expect(button).toHaveFocus();

    // ToDo: research why submit test fails

    // userEvent.click(button);
    // fireEvent.submit(button);
    // expect(onSubmit).toHaveBeenCalled();
  });
});
