import { GlobalStyle } from './styles/GlobalStyle';
import { AppThemeProvider } from './context/ThemeContextProvider';
import { PageTitleContextProvider } from './context/PageTitleContextProvider';
import { RouterProvider } from 'react-router/dom';
import { router } from './router/router';
import { AuthContextProvider } from './context/AuthContextProvider';

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />

      <PageTitleContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </PageTitleContextProvider>
    </AppThemeProvider>
  );
}

export default App;
