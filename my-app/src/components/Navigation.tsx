import { NavLink as NavLinkBase } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../customHooks/useAuth';

export const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <NavLink to={'/'} end>
        Home Page
      </NavLink>
      |
      <NavLink to={'/posts'} end>
        Posts
      </NavLink>
      |
      {isAuthenticated ? (
        <NavLink to={'/profile'} end>
          My Profile
        </NavLink>
      ) : (
        <NavLink to={'/login'} end>
          Login
        </NavLink>
      )}
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavLink = styled(NavLinkBase)`
  padding: 0 12px;
  color: white;

  &.active {
    color: gold;
  }
`;
