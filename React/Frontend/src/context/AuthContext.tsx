import React, { createContext, useState, useEffect, useContext } from 'react';
import { getToken, setToken as storeToken, clearToken as removeToken } from '../helpers/auth';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  user: any | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setToken(storedToken);
      try {
        const decodedUser = jwtDecode(storedToken);
        setUser(decodedUser);
      } catch (error) {
        console.error('Error decoding token:', error);
        removeToken();
        setToken(null);
        setUser(null);
      }
    }
  }, []);

  const login = (newToken: string) => {
    storeToken(newToken);
    setToken(newToken);
    try {
      const decodedUser = jwtDecode(newToken);
      setUser(decodedUser);
    } catch (error) {
      console.error('Error decoding token:', error);
      removeToken();
      setToken(null);
      setUser(null);
    }
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!user;
  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);