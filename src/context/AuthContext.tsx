import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { registerRequest, loginRequest, verificarToken } from "../api/auth";
import Cookies from 'js-cookie';

// Definir la interfaz para el usuario
interface User {
  id: string,
  email: string;
  username: string;
  password: string;
  names: string,
  surnames: string,
  sex: boolean,
  isAdmin: boolean
}

// Definir la interfaz del contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors: string[];
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
}

// Crear contexto con el tipo definido
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  }

  return context;
};

// Definir las props del AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user: User) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }

      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verificarToken();
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data.user);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{
      signup,
      signin,
      loading,
      user,
      isAuthenticated,
      errors,
    }}>
      {children}
    </AuthContext.Provider>
  );
};