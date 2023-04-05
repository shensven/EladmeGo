import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native-bars';
import 'react-native-gesture-handler';
import {useAppEffect} from './src/utils/appEffect';
import {useAsyncStorageFlipperPlugin} from './src/utils/asyncStorage';
import {useAppearance} from './src/utils/appearance';
import AppStack from './src/AppStack';
import {BottomSheet, BottomSheetProvider} from './src/component/BottomSheet';

function App() {
  useAppEffect();
  useAsyncStorageFlipperPlugin();
  const {paperTheme, statusBarStyle} = useAppearance();

  return (
    <PaperProvider theme={paperTheme}>
      <BottomSheetProvider>
        <StatusBar animated={true} barStyle={statusBarStyle} />
        <AppStack />
        <BottomSheet />
      </BottomSheetProvider>
    </PaperProvider>
  );
}

export default App;
