import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.1.100.3:3333/',
});
