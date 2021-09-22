import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 1apS6WVwxJYl1DP2WqJBAYgxojOEKGbL0KAztJAatz0'
    }
});