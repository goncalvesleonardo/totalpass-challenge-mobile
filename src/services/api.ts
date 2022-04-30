import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e7cf001a917d70016684131.mockapi.io/api/v2',
});

export default api;
