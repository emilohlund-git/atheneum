import React, {
  createContext,
  useReducer,
  ReactNode,
  useCallback,
  Dispatch,
} from 'react';

interface State {
  name: string;
  email: string;
  address: string;
  number: number;
}

interface Action {
  id: string;
  value: string | number;
  type: string;
}

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

interface FormContextProps {
  children: ReactNode;
}

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
