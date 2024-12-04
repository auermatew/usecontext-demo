import React, { createContext, useState, ReactNode } from 'react';
import { User, Permissions, AuthContextType } from '../types/auth';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  permissions: {
    canManageUsers: false,
    canAccessDashboard: false
  },
  login: () => {},
  logout: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<Permissions>({
    canManageUsers: false,
    canAccessDashboard: false
  });

  const login = (username: string, role: 'user' | 'admin') => {
    const newUser: User = { username, role };
    setUser(newUser);
    setPermissions({
      canManageUsers: role === 'admin',
      canAccessDashboard: role === 'admin'
    });
  };

  const logout = () => {
    setUser(null);
    setPermissions({
      canManageUsers: false,
      canAccessDashboard: false
    });
  };

  return (
    <AuthContext.Provider value={{ user, permissions, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};