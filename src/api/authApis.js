import { authApi } from "./axios.js";

const userLogin = (data) =>
  authApi.request({
    url: `/login`,
    data: data,
  });
const authMe = (accessToken) =>
  authApi.request({
    url: "/me",
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
const refreshSession = (refreshToken) =>
  authApi.request({
    url: "/refresh",
    method: "POST",
    data: { refreshToken: refreshToken },
  });

export { userLogin, authMe, refreshSession };
