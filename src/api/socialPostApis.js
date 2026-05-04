import { postApi } from "./axios.js";

const createPost = (data)=>postApi.post("/",data);
const getPosts = (params)=>postApi.get("/", {params:params});
const deletePost = (postId)=>postApi.delete(`/${postId}`)

export {
    createPost,
    getPosts,
    deletePost,
}