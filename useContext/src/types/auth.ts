export interface User {
    username: string;
    role: 'user' | 'admin';
  }
  
  export interface Permissions {
    canManageUsers: boolean;
    canAccessDashboard: boolean;
  }
  
  export interface AuthContextType {
    user: User | null;
    permissions: Permissions;
    login: (username: string, role: 'user' | 'admin') => void;
    logout: () => void;
  }