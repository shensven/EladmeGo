import {useAtom} from 'jotai';
import {accessTokenAtom, is401StatusAtom} from '../status/atom';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [is401Status, setIs401Status] = useAtom(is401StatusAtom);

  const clearAccessToken = () => {
    setAccessToken('');
  };

  return {accessToken, setAccessToken, clearAccessToken, is401Status, setIs401Status};
};

export default useAccessToken;
