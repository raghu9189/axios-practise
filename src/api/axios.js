import axios from "axios";

const GIT_BASE_URL = "https://api.github.com"
const DUMMY_BASE_URL = "https://jsonplaceholder.typicode.com/posts"
const AUTH_API = "https://dummyjson.com/auth"

const userApi = axios.create({
    baseURL: GIT_BASE_URL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
});

const postApi = axios.create({
    baseURL: DUMMY_BASE_URL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
});

const authApi = axios.create({
    baseURL: AUTH_API,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
});

export {
    userApi,
    postApi,
    authApi
};