export type UserRole = 'patient' | 'doctor' | 'receptionist' | 'admin' | 'staff';

export interface User {
  id?: string;
  email: string;
  role: UserRole;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (data: { 
    email: string;
    password: string;
    role: UserRole;
    name: string;
    phone?: string;
  }) => Promise<void>;
  logout: () => void;
}