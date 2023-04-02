import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useAppEffect} from '@/utils/appEffect';
import {useAsyncStorageFlipperPlugin} from '@/utils/asyncStorage';
import {useAppearance} from '@/utils/appearance';
import AppStack from '@/AppStack';
import 'react-native-gesture-handler';

function App() {
  useAppEffect();
  useAsyncStorageFlipperPlugin();
  const {paperTheme} = useAppearance();

  return (
    <PaperProvider theme={paperTheme}>
      <AppStack />
    </PaperProvider>
  );
}

export default App;
