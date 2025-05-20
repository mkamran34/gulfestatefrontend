import axios from 'axios';
import API_URL from '../config';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
