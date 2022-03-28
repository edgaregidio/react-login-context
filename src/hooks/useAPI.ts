import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useAPI = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 3,
        name: 'Jose',
        email: 'teste@teste.com',
      }
    };
    // const response = await api.post('/validade', {token});
    // return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: {
        id: 3,
        name: 'Jose',
        email: 'teste@teste.com',
      },
      token: '123123123'
    };
    // const response = await api.post('/signin', {email, password});
    // return response.data;
  },
  logout: async () => {
    return {status: true}
    // const response = await api.post('/logout');
    // return response.data;
  }
})