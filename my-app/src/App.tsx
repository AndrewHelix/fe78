import { AppLayout } from './lessons/AppLayout';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppThemeProvider } from './context/ThemeContextProvider';
import { PageTitleContextProvider } from './context/PageTitleContextProvider';
import { RegistrationForm } from './components/Forms/RegistrationForm';
import { RegistrationConfirmedPage } from './components/pages/RegistrationConfirmedPage';
import { DrillingExample, Modal } from './lessons/lesson42';
import { useTheme } from './customHooks/useTheme';

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />

      <PageTitleContextProvider>
        <AppLayout>
          <Modal />
          {/* <InputWithRef /> */}
          {/* <Posts /> */}
          {/* <LoginForm onSuccess={() => {}} /> */}
          {/* <RegistrationConfirmedPage /> */}
          {/* <RegistrationForm onSuccess={() => {}} /> */}
        </AppLayout>
      </PageTitleContextProvider>
    </AppThemeProvider>
  );
}

export default App;
