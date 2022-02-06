import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('can be customized using className', () => {
    const className = 'custom-class-name';

    const { container } = render(
      <Heading className={className} data-element='heading'>
        content
      </Heading>
    );

    // has className
    expect(container.firstChild).toHaveClass(className);
  });

  it('renders content', () => {
    const content = <div>my content</div>;

    render(<Heading>{content}</Heading>);

    expect(screen.getByText('my content')).toBeInTheDocument();
  });

  it('renders the correct heading level', () => {
    const { rerender } = render(
      <Heading>You’ve got a new medication that needs to be verified.</Heading>
    );

    let heading = screen.getByRole('heading', { level: 2 });

    // expects the title to be a heading and by default h2
    expect(heading).toBeInTheDocument();

    rerender(
      <Heading headingLevel='h3'>
        You’ve got a new medication that needs to be verified.
      </Heading>
    );

    heading = screen.getByRole('heading', { level: 3 });

    // expects the title to be rendered as an h3
    expect(heading).toBeInTheDocument();
  });

  it('accepts html attributes', () => {
    const customProps = {
      'aria-label': 'some',
      'data-custom': 'custom'
    };

    const { container } = render(<Heading {...customProps}>Content</Heading>);

    Object.entries(customProps).forEach(([key, value]) => {
      // expects Heading to output customProps
      expect(container.firstChild).toHaveAttribute(key, value);
    });
  });
});
