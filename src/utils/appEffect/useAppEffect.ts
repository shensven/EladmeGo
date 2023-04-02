import {useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAccessToken} from '@/utils/httpClient';

const useAppEffect = () => {
  const {setAccessToken} = useAccessToken();

  useLayoutEffect(() => {
    AsyncStorage.getItem('@accessToken').then(_accessToken => {
      if (_accessToken) {
        setAccessToken(_accessToken);
      }
    });
  }, []);
};

export default useAppEffect;
