import React, { createContext, useState } from 'react';
import { defaultTheme } from '../themes/DefaultTheme';
import { Theme } from '../types/Theme';
import { ThemeContextProps } from './ThemeContext.types';

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: (_: Theme) => {},
} as { theme: Theme; toggleTheme: (theme: Theme) => void });

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = (theme: Theme): void => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
