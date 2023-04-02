import {useLayoutEffect} from 'react';
import {useAccessToken} from '@/utils/httpClient';

const useAppEffect = () => {
  const {restoreAccessToken} = useAccessToken();

  useLayoutEffect(() => {
    restoreAccessToken();
  }, []);
};

export default useAppEffect;
