import axios from 'axios';

const URI = process.env.REACT_APP_URL_PAGE;
const api = axios.create({
  baseURL: URI,
});

export default api;
