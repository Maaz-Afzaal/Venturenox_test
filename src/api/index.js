import axios from 'axios';

const url = 'https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/';
export const fetchPosts = () => axios.get(url);
