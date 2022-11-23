import { ReactNode } from 'react';

export interface State {
  name: string;
  email: string;
  address: string;
  number: number;
}

export interface Action {
  id: string;
  value: string | number;
  type: string;
}

export interface FormContextProps {
  children: ReactNode;
}
