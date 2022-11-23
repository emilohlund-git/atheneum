import { FormEvent, ReactNode } from 'react';

export interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  id: string;
}
