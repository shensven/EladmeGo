import {usePassQr} from '@/utils/passQr';

const useData = () => {
  const {passQr} = usePassQr();
  const data = passQr?.elevator ?? [];

  return data;
};

export default useData;
