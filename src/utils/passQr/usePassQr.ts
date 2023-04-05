import {useAtom} from 'jotai';
import type {AxiosResponse} from 'axios';
import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';
import {countdownAtom, lastFloorUsedAtom, passQrAtom} from '@/utils/status/atom';
import {axiosInstance, useAccessToken} from '@/utils/httpClient';

type PassQr = {
  common_floor: number[];
  default_floor: number;
  elevator: number[];
  enterprise_name: string;
  floor_name: string;
  job_number: string;
  minute: number;
  qrCode: string;
  uuid?: string;
};

const usePassQr = () => {
  const [passQr, setPassQr] = useAtom(passQrAtom);
  const [, setCountdown] = useAtom(countdownAtom);

  const [lastFloorUsed, setLastFloorUsed] = useAtom(lastFloorUsedAtom);
  const {setIs401Status} = useAccessToken();

  const resetPassQr = () => {
    setPassQr(undefined);
  };

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
      setPassQr({...data.result, uuid: uuidv1()});
      setCountdown(data.result.minute ?? 0);
      setLastFloorUsed(data.result.default_floor);
    }

    if (data.code === 401) {
      setCountdown(0);
      resetPassQr();
      setIs401Status(true);
    }

    if (data.code === 705) {
      setLastFloorUsed(undefined);
    }

    return resp;
  };

  return {passQr, getPassQr, resetPassQr};
};

export default usePassQr;
export type {PassQr};
