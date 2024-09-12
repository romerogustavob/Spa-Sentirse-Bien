import axios from './axios';

interface User {
    username: string;
    password: string;
  }

export const registerRequest = (user: User) => axios.post('/register', user);

export const loginRequest = (user: User) => axios.post('/login', user);

export const verificarToken = () => axios.get('/verify');