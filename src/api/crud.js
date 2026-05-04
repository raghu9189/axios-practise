import axios from "axios";

// basics 
let URL = "https://jsonplaceholder.typicode.com/posts"

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
// Promise way
// Create 
const postData = ()=>{
    const body = {
        title: 'Raghu',
        body: 'Learning Axios',
    }

    axios.post(URL, body)
        .then(responseCallBack)
        .catch(errorCallBack)
}

// Read
const getData = ()=>{
    axios.get(URL)
    .then(responseCallBack)
    .catch(errorCallBack)
}

// Update
const updateData = ()=>{
    const body = {
        title: 'I am Raghu',
        body: 'Learning Axios End to End',
    }
    axios.put(`${URL}/1`, body)
        .then(responseCallBack)
        .catch(errorCallBack)
}

// Delete 
const deleteData = ()=>{
    axios.delete(`${URL}/1`, )
        .then(responseCallBack)
        .catch(errorCallBack)
}

// patch method  (Partially update)
const partiallyUpdateData = ()=>{
    const body = {
        body: 'Learning Axios End to End',
    }
    axios.patch(`${URL}/1`, body)
        .then(responseCallBack)
        .catch(errorCallBack)
}
// getData()
// postData()
// updateData()
// deleteData()
// partiallyUpdateData()






