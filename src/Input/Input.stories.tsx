import React from 'react';
import { Story, Meta } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import Input from './Input';
import { InputProps } from './Input.types';

export default {
  title: 'Components/UI/Input',
  component: Input,
  argTypes: {},
  decorators: [withKnobs],
} as Meta<typeof Input>;

const OverviewTemplate: Story<InputProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="font-semibold text-lg my-4">Input styles</p>
        <div className="flex gap-x-4">
          <Input variant="primary" value="Primary" />
          <Input variant="bordered" value="Bordered" />
          <Input variant="ghost" value="Ghost" />
        </div>
        <p className="font-semibold text-lg my-4">Input sizes</p>
        <div className="flex gap-x-4">
          <Input variant="primary" size="large" value="Large" />
          <Input variant="primary" size="medium" value="Medium" />
          <Input variant="primary" size="small" value="Small" />
        </div>
        <p className="font-semibold text-lg my-4">Input colors</p>
        <div className="flex gap-x-4">
          <Input variant="primary" warning size="medium" value="Warning" />
          <Input variant="primary" error size="medium" value="Error" />
          <Input variant="primary" success size="medium" value="Success" />
        </div>
      </div>
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});

const Template: Story<InputProps> = args => {
  return <Input {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary',
  variant: 'primary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  placeholder: 'Ghost',
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: 'bordered',
  placeholder: 'Bordered',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  value: 'Error',
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  value: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  value: 'Warning',
};
