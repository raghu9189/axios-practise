import axios from "axios";

const GIT_BASE_URL = "https://api.github.com"

const userApi = axios.create({
    baseURL: GIT_BASE_URL,
    timeout: 5000,
});

export {
    userApi
};