import axios from "axios"

const userAxiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

userAxiosClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem('user_token')
    if(token){
        config.headers.Authorization = `Bearer ${token}` 
    }
    return config;
})

userAxiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    try{
        const {response} = error;
        if(response.status === 401){
            localStorage.removeItem('user_token')
        }
    }catch(e){
        console.log(e)
    }

    throw error;
})

export default userAxiosClient;