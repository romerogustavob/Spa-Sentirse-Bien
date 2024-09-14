import axios from './axios';

// Interfaz del usuario, posiblemente podrías agregar más campos
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

// Interfaz para la respuesta de usuario
interface UserResponse {
  data: {
    user: User;
  };
}

// Interfaz para la respuesta de verificar token
interface VerificarTokenResponse {
  data: {
    user: User | null;
  };
}

// Funciones con tipos de retorno explícitos
export const registerRequest = (user: User): Promise<UserResponse> => 
  axios.post('/register', user);

export const loginRequest = (user: User): Promise<UserResponse> => 
  axios.post('/login', user);

export const verificarToken = (): Promise<VerificarTokenResponse> => 
  axios.get('/verify');