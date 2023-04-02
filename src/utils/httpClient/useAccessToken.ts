import {useAtom} from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accessTokenAtom} from '../status/atom';

const useAccessToken = () => {
  const [_accessToken, setAccessToken] = useAtom(accessTokenAtom);

  const storeAccessToken = (accessToken: string) => {
    setAccessToken(accessToken);
    AsyncStorage.setItem('@accessToken', accessToken);
  };

  return {accessToken: _accessToken, setAccessToken, storeAccessToken};
};

export default useAccessToken;
