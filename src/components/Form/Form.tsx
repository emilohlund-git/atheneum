import React, { useContext } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FormProps } from './Form.types';
import { FormContext } from '../../context/FormContext';

const Form: React.FC<FormProps> = ({ id }) => {
  const { state, inputHandler } = useContext(FormContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form id={id} onSubmit={submitHandler}>
      <section>
        <Input
          id="name"
          component="input"
          placeholder="Name"
          variant="bordered"
          type="text"
          onInput={inputHandler}
        />
        <Input
          id="email"
          component="input"
          placeholder="Email"
          variant="bordered"
          type="email"
          onInput={inputHandler}
        />
        <Input
          id="address"
          component="input"
          placeholder="Address"
          variant="bordered"
          type="text"
          onInput={inputHandler}
        />
        <Input
          id="number"
          component="input"
          placeholder="Number"
          variant="bordered"
          type="number"
          onInput={inputHandler}
        />
        <Button type="submit">Submit</Button>
      </section>
    </form>
  );
};

export default Form;
