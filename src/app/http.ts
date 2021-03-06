import axios from 'axios';
import loginService from '../services/login.service';
import { store } from './store';
import { logoutAsync } from '../redux/authSlice';

const http = axios.create({
  baseURL: 'https://some-domain.com/api/',
});

http.interceptors.request.use(
  (config) => {
    const jwt = loginService.getJwt();

    if (jwt) {
      http.defaults.headers = { Authentication: `Bearer ${jwt}` };
    }

    return config;
  },
  (error) => {
    if (error?.response.status === 401) {
      store.dispatch(logoutAsync());
    }
    return Promise.reject(error);
  },
);

export default http;
