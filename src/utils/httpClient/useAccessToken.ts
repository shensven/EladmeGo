import {useAtom} from 'jotai';
import {accessTokenAtom} from '../status/atom';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  const clearAccessToken = () => {
    setAccessToken('');
  };

  return {accessToken, setAccessToken, clearAccessToken};
};

export default useAccessToken;
