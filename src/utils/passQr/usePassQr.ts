import {useAtom} from 'jotai';
import type {AxiosResponse} from 'axios';
import {lastFloorUsedAtom, passQrAtom} from '@/utils/status/atom';
import {axiosInstance} from '@/utils/httpClient';

type PassQr = {
  common_floor: number[];
  default_floor: number;
  elevator: number[];
  enterprise_name: string;
  floor_name: string;
  job_number: string;
  minute: number;
  qrCode: string;
};

const usePassQr = () => {
  const [passQr, setPassQr] = useAtom(passQrAtom);
  const [lastFloorUsed, setLastFloorUsed] = useAtom(lastFloorUsedAtom);

  const getPassQr = async (accessToken: string, targetFloor?: number) => {
    const floor = targetFloor ?? lastFloorUsed;

    let params: {floor?: number} = {};
    if (floor) {
      params.floor = floor;
    }

    const resp: AxiosResponse<{code: number; message: string; result: PassQr}> = await axiosInstance.get(
      'member/v1/member/getPassQr',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params,
      },
    );

    const {data} = resp;

    if (data.code === 0) {
      setPassQr(data.result);
      setLastFloorUsed(data.result.default_floor);
    }

    if (data.code === 705) {
      setLastFloorUsed(undefined);
    }

    return resp;
  };

  const resetPassQr = () => {
    setPassQr(undefined);
  };

  return {passQr, getPassQr, resetPassQr};
};

export default usePassQr;
export type {PassQr};
