import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/'

const CreateMessage = async (payload) => {
    return await axios.post(`${baseUrl}contact/`, payload)
}

export {
    CreateMessage,
    
}