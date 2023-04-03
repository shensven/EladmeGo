import {useAtom} from 'jotai';
import {useAxios} from '@/utils/httpClient';
import type {AxiosResponse} from 'axios';
import {passQrAtom} from '@/utils/status/atom';

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
  const axios = useAxios();
  const [passQr, setPassQr] = useAtom(passQrAtom);

  const getPassQr = async () => {
    const resp: AxiosResponse<{code: number; message: string; result: PassQr}> = await axios.get(
      'member/v1/member/getPassQr',
    );

    if (resp.data.code === 0) {
      setPassQr(resp.data.result);
    }
  };

  return {passQr, getPassQr};
};

export default usePassQr;
export type {PassQr};
