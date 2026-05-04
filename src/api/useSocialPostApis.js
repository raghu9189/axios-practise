import { deletePost, createPost, getPosts } from "./socialPostApis.js"


const bodyData = {
    title: "hello dear",
    description: "text me right now"
}
const paramsData = {
    userId: 4
}

// createPost(bodyData)
//     .then(responseCallBack)
//     .catch(errorCallBack)

// getPosts(paramsData)
//     .then(responseCallBack)
//     .catch(errorCallBack)

deletePost(1)
    .then(responseCallBack)
    .catch(errorCallBack)


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
