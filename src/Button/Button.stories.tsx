import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {},
  decorators: [withKnobs],
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

const OverviewTemplate: Story<ButtonProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="font-semibold text-lg my-4">Outline buttons</p>
        <div className="flex gap-x-4">
          <Button variant="primary" outline text="Primary" />
          <Button variant="secondary" outline text="secondary" />
          <Button variant="accent" outline text="accent" />
          <Button variant="light" outline text="light" />
          <Button variant="dark" outline text="dark" />
          <Button variant="success" outline text="success" />
          <Button variant="error" outline text="error" />
          <Button variant="error" loading outline text="error" />
        </div>
        <p className="font-semibold text-lg my-4">Filled buttons</p>
        <div className="flex gap-x-4">
          <Button variant="primary" text="Primary" />
          <Button variant="secondary" text="secondary" />
          <Button variant="accent" text="accent" />
          <Button variant="light" text="light" />
          <Button variant="dark" text="dark" />
          <Button variant="success" text="success" />
          <Button variant="error" text="error" />
          <Button variant="error" loading text="error" />
        </div>
        <p className="font-semibold text-lg my-4">Button sizes</p>
        <div className="flex gap-x-4">
          <Button variant="primary" size="large" text="Large" />
          <Button variant="secondary" size="medium" text="Medium" />
          <Button variant="accent" size="small" text="Small" />
        </div>
      </div>
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {
  variant: 'primary',
  disabled: false,
  text: 'Primary',
  size: 'medium',
  loading: false,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  text: 'Primary',
  size: 'medium',
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  text: 'Secondary',
  size: 'medium',
  loading: false,
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  disabled: false,
  text: 'Accent',
  size: 'medium',
  loading: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  disabled: false,
  text: 'Hello There',
  size: 'large',
  loading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  disabled: false,
  text: 'Dark',
  size: 'medium',
  loading: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  disabled: false,
  text: 'Success',
  size: 'medium',
  loading: false,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  disabled: false,
  text: 'Error',
  size: 'medium',
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  text: 'Disabled',
  size: 'medium',
  loading: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  disabled: false,
  size: 'small',
  text: 'Small',
  loading: false,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  text: 'Medium',
  loading: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  disabled: false,
  size: 'large',
  text: 'Large',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  text: 'Loading',
  loading: true,
};
