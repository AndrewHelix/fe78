import { useNavigate } from 'react-router';
import { LoginForm } from '../components/Forms/LoginForm';
import { useAuth } from '../customHooks/useAuth';

const LoginPage = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsAuthenticated(true);
    navigate('/profile');
  };

  return <LoginForm onSuccess={handleSuccess} />;
};

export default LoginPage;
