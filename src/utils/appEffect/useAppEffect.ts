import {useLayoutEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useUpdateEffect} from 'ahooks';
import {useAppearance} from '@/utils/appearance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAppEffect = () => {
  const rnColorScheme = useColorScheme();
  const {themeScheme, setAppearance} = useAppearance();

  useLayoutEffect(() => {
    AsyncStorage.getItem('themeScheme').then(storageThemeScheme => {
      const parsedThemeScheme = JSON.parse(storageThemeScheme || 'null');
      setAppearance(parsedThemeScheme ?? 'system');
    });
  }, []);

  useUpdateEffect(() => {
    setAppearance(themeScheme);
  }, [rnColorScheme]);
};

export default useAppEffect;
