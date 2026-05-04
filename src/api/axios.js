import axios from "axios";
// Docs: https://dummyjson.com/docs/auth
const AUTH_API = "https://dummyjson.com/auth"
const authApi = axios.create({
    baseURL: AUTH_API,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
});

export {
    authApi
};