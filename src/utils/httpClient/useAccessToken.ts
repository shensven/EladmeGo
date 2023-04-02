import {useAtom} from 'jotai';
import {accessTokenAtom} from '../status/atom';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  return {accessToken, setAccessToken};
};

export default useAccessToken;
