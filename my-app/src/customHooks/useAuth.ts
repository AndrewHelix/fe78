import { useContext } from 'react';
import { AuthContext, type AuthContextValue } from '../context/authContext';

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('User auth context inside Provider');
  }

  return context;
};
