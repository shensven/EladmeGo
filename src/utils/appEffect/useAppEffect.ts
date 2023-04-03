import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useAppearance} from '@/utils/appearance';

const useAppEffect = () => {
  const rnColorScheme = useColorScheme();
  const {themeScheme, setAppearance} = useAppearance();

  useEffect(() => {
    setAppearance(themeScheme);
  }, [rnColorScheme]);
};

export default useAppEffect;
