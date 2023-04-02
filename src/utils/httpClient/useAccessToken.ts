import {useAtom} from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accessTokenAtom} from '../status/atom';

const useAccessToken = () => {
  const [_accessToken, _setAccessToken] = useAtom(accessTokenAtom);

  const storeAccessToken = (accessToken: string) => {
    _setAccessToken(accessToken);
    AsyncStorage.setItem('@accessToken', accessToken);
  };

  const restoreAccessToken = async () => {
    AsyncStorage.getItem('@accessToken').then(accessTokenValue => {
      if (accessTokenValue) {
        _setAccessToken(accessTokenValue);
      }
    });
  };

  return {accessToken: _accessToken, setAccessToken: _setAccessToken, storeAccessToken, restoreAccessToken};
};

export default useAccessToken;
