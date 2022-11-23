import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

import { withKnobs } from '@storybook/addon-knobs';
import ThemeProvider from '../Context/ThemeContext/ThemeContext';

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
      <ThemeProvider>
        <div className="flex flex-col">
          <p className="font-semibold text-lg my-4">Outline buttons</p>
          <div className="flex gap-x-4">
            <Button variant="primary" outline>
              Text
            </Button>
            <Button variant="secondary" outline>
              Text
            </Button>
            <Button variant="accent" outline>
              Text
            </Button>
            <Button variant="light" outline>
              Text
            </Button>
            <Button variant="dark" outline>
              Text
            </Button>
            <Button variant="success" outline>
              Text
            </Button>
            <Button variant="error" outline>
              Text
            </Button>
            <Button variant="error" loading outline>
              Text
            </Button>
          </div>
          <p className="font-semibold text-lg my-4">Filled buttons</p>
          <div className="flex gap-x-4">
            <Button variant="primary">Text</Button>
            <Button variant="secondary">Text</Button>
            <Button variant="accent">Text</Button>
            <Button variant="light">Text</Button>
            <Button variant="dark">Text</Button>
            <Button variant="success">Text</Button>
            <Button variant="error">Text</Button>
            <Button variant="error" loading>
              Text
            </Button>
          </div>
          <p className="font-semibold text-lg my-4">Button sizes</p>
          <div className="flex gap-x-4">
            <Button variant="primary" size="large">
              Text
            </Button>
            <Button variant="secondary" size="medium">
              Text
            </Button>
            <Button variant="accent" size="small">
              Text
            </Button>
            <Button variant="success" size="tiny">
              Text
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  disabled: false,
  size: 'large',
  loading: false,
  children: <p>Text</p>,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Tiny = Template.bind({});
Tiny.args = {
  variant: 'primary',
  disabled: false,
  size: 'tiny',
  loading: false,
  children: <p>Text</p>,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  disabled: false,
  size: 'small',
  loading: false,
  children: <p>Text</p>,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  loading: false,
  children: <p>Text</p>,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  disabled: false,
  size: 'large',
  loading: false,
  children: <p>Text</p>,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  loading: true,
  children: <p>Text</p>,
};
