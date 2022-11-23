import React, { createContext, useReducer, useCallback, Dispatch } from 'react';
import { Action, FormContextProps, State } from './FormContext.types';

const initialState: State = {
  name: '',
  email: '',
  address: '',
  number: 0,
};

const formReducer = (state: State, action: Action) => {
  console.log(state, action);
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.id]: action.value };
    default:
      return state;
  }
};

export const FormContext = createContext({
  state: initialState,
  dispatch: () => {},
  inputHandler: () => {},
} as { state: State; dispatch: Dispatch<Action>; inputHandler: (id: string, value: string | number) => void });

const FormProvider: React.FC<FormContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const inputHandler = useCallback((id: string, value: string | number) => {
    dispatch({ type: 'INPUT_CHANGE', value: value, id: id });
  }, []);

  return (
    <FormContext.Provider value={{ state, dispatch, inputHandler }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
