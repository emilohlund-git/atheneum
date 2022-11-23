import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form from './Form';
import { FormProps } from './Form.types';
import FormProvider from '../../context/FormContext';

export default {
  title: 'Components/UI/Form',
  component: Form,
  argTypes: {},
  decorators: [
    Story => {
      return (
        <FormProvider>
          <div>
            <Story />
          </div>
        </FormProvider>
      );
    },
  ],
} as Meta<typeof Form>;

const Template: Story<FormProps> = args => {
  return <Form {...args} />;
};

export const AuthForm = Template.bind({});
AuthForm.args = {};
