import React, {useEffect} from 'react';
import {View, Image, Dimensions, useColorScheme} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useAppearance} from '@/utils/appearance';

function Welcome() {
  const screenHeight = Dimensions.get('screen').height;
  const colorScheme = useColorScheme();
  const {themeScheme, setStatusBarStyle} = useAppearance();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setStatusBarStyle('dark-content');
    } else {
      switch (themeScheme) {
        case 'light':
          setStatusBarStyle('dark-content');
          break;
        case 'dark':
          setStatusBarStyle('light-content');
          break;
        case 'system':
          setStatusBarStyle(colorScheme === 'dark' ? 'light-content' : 'dark-content');
          break;
        default:
          const n: never = themeScheme;
          throw new Error('Unexpected themeScheme: ' + n);
      }
    }
  }, [isFocused]);

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: screenHeight / 2 - 160}}>
      <Image source={require('@/assets/splash/bootsplash.png')} style={{width: 240, height: 240}} />
    </View>
  );
}

export default Welcome;
