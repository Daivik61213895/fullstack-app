import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.210.227.176:5000/api', // Replace with your backend URL(use localhost instead of IP if running locally)
});

export default api;