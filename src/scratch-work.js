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


// postData();

// async/await get data IIFE

// (async () => {
//     try {
//         const response = await axios.get(`${URL}/1`)
//         console.log(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// })();

const fetchData = async () => {
    try {
        const response = await axios.get(`${URL}/2`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
};

//  URL:   /posts?userId=4
const fetchDataParams = async () => {
    try {
        const response = await axios.get(URL, {
            params: {
                userId: 4 
            },
            timeout: 5000,
        })
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
};
// fetchDataParams();

// getUserDetails("raghu9189")
//     .then(responseCallBack)
//     .catch((error)=>{
//         console.log(error);
//     })
