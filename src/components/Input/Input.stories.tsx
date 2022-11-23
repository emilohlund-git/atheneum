import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from './Input';
import { InputProps } from './Input.types';

export default {
  title: 'Components/UI/Input',
  component: Input,
  argTypes: {},
  decorators: [],
} as Meta<typeof Input>;

const OverviewTemplate: Story<InputProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="font-semibold text-lg my-4">Input styles</p>
        <div className="flex gap-x-4">
          <Input onInput={() => {}} variant="primary" />
          <Input onInput={() => {}} variant="bordered" />
          <Input onInput={() => {}} variant="ghost" />
        </div>
        <p className="font-semibold text-lg my-4">Input sizes</p>
        <div className="flex gap-x-4">
          <Input onInput={() => {}} variant="primary" size="large" />
          <Input onInput={() => {}} variant="primary" size="medium" />
          <Input onInput={() => {}} variant="primary" size="small" />
        </div>
        <p className="font-semibold text-lg my-4">Input colors</p>
        <div className="flex gap-x-4">
          <Input onInput={() => {}} variant="primary" warning size="medium" />
          <Input onInput={() => {}} variant="primary" error size="medium" />
          <Input onInput={() => {}} variant="primary" success size="medium" />
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
  message: 'This is an error message. Something went terribly wrong.',
};

export const Success = Template.bind({});
Success.args = {
  success: true,
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
