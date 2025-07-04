import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api', // Fallback to localhost if not set
});

export default api;