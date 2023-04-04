import {useLayoutEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useUpdateEffect} from 'ahooks';
import {useAppearance} from '@/utils/appearance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAccessToken, useActive} from '@/utils/httpClient';
import {useStaff} from '@/utils/staff';

const useAppEffect = () => {
  const rnColorScheme = useColorScheme();
  const {themeScheme, setAppearance} = useAppearance();
  const verifyActive = useActive();
  const {setIs401Status} = useAccessToken();
  const {verifyStaff} = useStaff();

  useLayoutEffect(() => {
    AsyncStorage.getItem('themeScheme').then(storageThemeScheme => {
      const parsedThemeScheme = JSON.parse(storageThemeScheme || 'null');
      setAppearance(parsedThemeScheme ?? 'system');
    });

    AsyncStorage.getItem('accessToken').then(storageAccessToken => {
      const parsedAccessToken = JSON.parse(storageAccessToken || 'null');
      if (parsedAccessToken) {
        verifyActive(parsedAccessToken).then(resp => {
          if (resp.data.code === 401) {
            setIs401Status(true);
          }
        });
        verifyStaff(parsedAccessToken);
      }
    });
  }, []);

  useUpdateEffect(() => {
    setAppearance(themeScheme);
  }, [rnColorScheme]);
};

export default useAppEffect;
