import axios from "axios";
import { userApi } from "./axios.js";

const getAllUsers = () => userApi.get("/users");
const getUserDetails = (userId) => userApi.get(`/users/${userId}`)

export {
    getAllUsers,
    getUserDetails,
}