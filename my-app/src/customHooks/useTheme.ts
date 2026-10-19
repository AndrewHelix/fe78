import { useContext } from 'react';
import { ThemeContext, type ThemeContextValue } from '../context/themeContext';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('smth went wrong');
  }

  return context;
};
