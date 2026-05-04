import axios from "axios";
import { getAllUsers, getUserDetails } from "./userApis.js";

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

getAllUsers()
    .then(responseCallBack)
    .catch((error)=>{
        console.log(error);
    })