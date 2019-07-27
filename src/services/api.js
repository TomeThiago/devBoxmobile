import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devbox-backend.herokuapp.com'
});

export default api;