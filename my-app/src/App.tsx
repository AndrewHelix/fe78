import { AppLayout } from './lessons/AppLayout';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { RegistrationForm } from './components/Forms/RegistrationForm';
import { RegistrationConfirmedPage } from './components/pages/RegistrationConfirmedPage';
import { Parent, Posts, User, UserWrapper } from './lessons/lesson41';
import { LoginForm } from './components/Forms/LoginForm';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <AppLayout
        title={isRegistered ? 'Registration confirmed' : 'Registration page'}
        onToggleTheme={toggleTheme}
      >
        <Posts />
        {/* <LoginForm onSuccess={() => {}} /> */}
        {/* {isRegistered ? (
          <RegistrationConfirmedPage />
        ) : (
          <RegistrationForm onSuccess={() => setIsRegistered(true)} />
        )} */}
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
