import {useAtom} from 'jotai';
import type {AxiosResponse} from 'axios';
import {passQrAtom} from '@/utils/status/atom';
import {axiosInstance} from '@/utils/httpClient';

type PassQr = {
  common_floor: number[];
  default_floor: number;
  elevator: number;
  enterprise_name: string;
  floor_name: string;
  job_number: string;
  minute: number;
  qrCode: string;
};

const usePassQr = () => {
  const [passQr, setPassQr] = useAtom(passQrAtom);

  const getPassQr = async (accessToken: string) => {
    const resp: AxiosResponse<{code: number; message: string; result: PassQr}> = await axiosInstance.get(
      'member/v1/member/getPassQr',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (resp.data.code === 0) {
      setPassQr(resp.data.result);
    }
    return resp;
  };

  return {passQr, setPassQr, getPassQr};
};

export default usePassQr;
export type {PassQr};
