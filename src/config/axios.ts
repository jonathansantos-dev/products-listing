import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 3000
})

export default api;