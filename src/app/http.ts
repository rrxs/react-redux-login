import axios from "axios";
import loginService from "../services/login.service";
import {store} from "./store";
import {logoutAsync} from "../redux/authSlice";

const http = axios.create({
    baseURL: 'https://some-domain.com/api/',
});

http.interceptors.request.use(function (config) {

    const jwt = loginService.getJwt();

    if (jwt) {
        http.defaults.headers.push({Authentication: `Bearer ${jwt}`})
    }

    return config;
}, function (error) {
    if(error?.response.status === 401){
        store.dispatch(logoutAsync());
    }
    return Promise.reject(error);
});

export default http;
