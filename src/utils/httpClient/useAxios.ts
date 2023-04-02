import axiosInstance from './axiosInstance';
import useAccessToken from './useAccessToken';

const useAxios = () => {
  const {accessToken} = useAccessToken();

  axiosInstance.interceptors.request.use(
    config => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  return axiosInstance;
};

export default useAxios;
