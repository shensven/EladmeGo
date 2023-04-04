import type {AxiosResponse} from 'axios';
import axiosInstance from './axiosInstance';

const useActive = () => {
  const verifyActive = async (accessToken: string) => {
    const resp: AxiosResponse<{code: number; message: string; result: []}> = await axiosInstance.get(
      '/member/v1/member/active',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return resp;
  };

  return verifyActive;
};

export default useActive;
