import React from 'react';
import { FormProps } from './Form.types';

const Form: React.FC<FormProps> = ({ onSubmit, children, id }) => {
  return (
    <form id={id} onSubmit={onSubmit}>
      <section>{children}</section>
    </form>
  );
};

export default Form;
