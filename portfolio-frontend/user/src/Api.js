import axios from 'axios';

const Api = axios.create({
  baseURL: ' https://portfolio-mern-2-d3j1.onrender.com',
  withCredentials: true,
});

export default Api;