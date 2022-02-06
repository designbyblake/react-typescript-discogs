import cn from 'classnames';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  const { className, children, headingLevel } = args;
  return (
    <Heading {...args} className={cn(className, headingLevel)}>
      {children}
    </Heading>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Test'
};
