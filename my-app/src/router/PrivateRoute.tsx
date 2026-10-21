import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../customHooks/useAuth';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
