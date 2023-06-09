import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://gemdale.lanlnk.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
