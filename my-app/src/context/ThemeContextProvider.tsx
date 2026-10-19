import { type PropsWithChildren } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, type ThemeMode } from './themeContext';
import { useLocalStorage } from '../customHooks/useLocalStorage';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useLocalStorage<ThemeMode>('theme', 'light');

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
