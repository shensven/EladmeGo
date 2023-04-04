import {useAtom} from 'jotai';
import {axiosInstance} from '@/utils/httpClient';
import type {AxiosResponse} from 'axios';
import {isStaffAtom} from '@/utils/status/atom';

const useStaff = () => {
  const [isStaff, setIsStaff] = useAtom(isStaffAtom);

  const verifyStaff = async (accessToken: string) => {
    const resp: AxiosResponse<{
      code: number;
      message: string;
      result: {isStaff: number; custom: number; isBind: number};
    }> = await axiosInstance.get('/member/v1/member/isStaff', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (resp.data.code === 0) {
      setIsStaff(resp.data.result);
    }
  };

  const resetStaff = () => {
    setIsStaff({isStaff: -1, custom: -1, isBind: -1});
  };

  return {isStaff, verifyStaff, resetStaff};
};

export default useStaff;
