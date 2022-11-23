import React from 'react';
import { Story, Meta } from '@storybook/react';
import Component from './Component';
import { ComponentProps } from './Component.types';

export default {
  title: 'C<omponents/UI/Button',
  component: Component,
  argTypes: {},
  decorators: [],
} as Meta<typeof Component>;

const Template: Story<ComponentProps> = args => {
  return <Component {...args} />;
};

export const DummyStory = Template.bind({});
DummyStory.args = {};