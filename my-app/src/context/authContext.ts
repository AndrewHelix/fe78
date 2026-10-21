import { createContext } from 'react';

export interface AuthContextValue {
  isAuthenticated: boolean;
  setIsAuthenticated: (param: boolean) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
