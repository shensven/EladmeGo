import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native-bars';
import {useAppEffect} from '@/utils/appEffect';
import {useAsyncStorageFlipperPlugin} from '@/utils/asyncStorage';
import {useAppearance} from '@/utils/appearance';
import AppStack from '@/AppStack';
import 'react-native-gesture-handler';

function App() {
  useAppEffect();
  useAsyncStorageFlipperPlugin();
  const {paperTheme, statusBarStyle} = useAppearance();

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar animated={true} barStyle={statusBarStyle} />
      <AppStack />
    </PaperProvider>
  );
}

export default App;
