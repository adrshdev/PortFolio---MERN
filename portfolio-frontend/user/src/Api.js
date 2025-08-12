import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://portfolio-mern-1-s1oo.onrender.com',
  withCredentials: true,
});

export default Api;