import axios from 'axios';

const api = axios.create({
  baseURL: 'https://filmcatalog.herokuapp.com',
});

export default api;
