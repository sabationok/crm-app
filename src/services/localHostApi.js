import axios from 'axios';

// const mockApi = axios.create({
//   baseURL: 'https://635ec7b303d2d4d47af5fbcd.mockapi.io/',
// });
const PORT = 3030;

const localHostApi = axios.create({
  baseURL: `http://localhost:${PORT}/api/product/`,
});

export const token = {
  set(token) {
    localHostApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    localHostApi.defaults.headers.Authorization = ``;
  },
};

export default localHostApi;
