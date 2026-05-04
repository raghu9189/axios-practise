import { userLogin, authMe, refreshSession } from "./authApis.js";

const loginBody = {
    username: 'emilys',
    password: 'emilyspass'
}
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Nzc4ODc4OTgsImV4cCI6MTc3Nzg5MTQ5OH0.RZET13QetW05-c7kbJNgaiGFVzyvS2g0bnInzPmK7Xw"
const refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Nzc4ODc4OTgsImV4cCI6MTc4MDQ3OTg5OH0.ObF0nDw31LW_NYm01pJqIHUAcq0R2YbV8yKccSaeDK4"

// userLogin(loginBody)
//     .then(responseCallBack)
//     .catch(errorCallBack)

authMe(accessToken)
    .then(responseCallBack)
    .catch(errorCallBack)

// refreshSession(refreshToken)
//     .then(responseCallBack)
//     .catch(errorCallBack)

function responseCallBack(response){
    const responseInfo = {
        status: response.status,
        // headers: response.headers,
        // etag: response.headers.etag,
        response: response.data,
    }
    console.log(responseInfo);
}

function errorCallBack(error){
    console.log(error);
}
