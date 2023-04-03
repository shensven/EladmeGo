import {useEffect, useLayoutEffect} from 'react';
import {useAccessToken} from '@/utils/httpClient';
import {usePassQr} from '@/utils/passQr';

const useAppEffect = () => {
  const {accessToken, restoreAccessToken} = useAccessToken();
  const {getPassQr} = usePassQr();

  useLayoutEffect(() => {
    restoreAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken.length > 0) {
      getPassQr();
    }
  }, [accessToken]);
};

export default useAppEffect;
