import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LinkProps } from './Link.types';
import Link from './Link';

export default {
  title: 'Components/UI/Link',
  component: Link,
  argTypes: {},
  decorators: [withKnobs],
} as Meta<typeof Link>;

const OverviewTemplate: Story<LinkProps> = () => {
  return (
    <div className="flex flex-col">
      <Link variant="primary">Primary</Link>
      <Link variant="secondary">Secondary</Link>
      <Link variant="accent">Accent</Link>
      <Link variant="light">Light </Link>
      <Link variant="dark">Dark</Link>
      <Link variant="error">Error</Link>
      <Link variant="success">Success</Link>
      <Link variant="warning" hover>
        Hover
      </Link>
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});

const Template: Story<LinkProps> = args => {
  return <Link {...args}>Link</Link>;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'primary',
  hover: true,
};
