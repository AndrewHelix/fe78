import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styled from 'styled-components';

import { User } from '../components/User/User';
import { Button } from '../components/Button/Button';
import { PageTitleContext } from '../context/pageTitleContext';
import { useTheme } from '../customHooks/useTheme';
import { Navigation } from '../components/Navigation';

const AppLayout = () => {
  const themeContext = useTheme();
  const pageTitleContext = useContext(PageTitleContext);
  const navigate = useNavigate();

  return (
    <Root>
      <Header>
        <User username="Artem Malkin" />
        <Navigation />
        <button onClick={themeContext.toggleTheme}>toggle theme</button>
      </Header>
      <Main>
        <Button
          content="Back to home"
          variant={'primary'}
          onClick={() => navigate('/')}
          isActive
        />
        <Title>{pageTitleContext?.title}</Title>
        <Outlet />
      </Main>
      <Footer>footer</Footer>
    </Root>
  );
};

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  //добавить тему
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Header = styled.header`
  min-height: 48px;
  background-color: blue;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  margin: 36px 0;
  font-size: 32px;
`;

const Main = styled.main`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  width: 1000px;
  min-height: 48px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid gray;
`;

export default AppLayout;
