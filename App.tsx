import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native-bars';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useAppEffect} from './src/utils/appEffect';
import {useAsyncStorageFlipperPlugin} from './src/utils/asyncStorage';
import {useAppearance} from './src/utils/appearance';
import AppStack from './src/AppStack';
import {BottomSheet, BottomSheetProvider} from './src/component/BottomSheet';
import {FloorListView as HomeFloorListView} from '@/screen/Home';

function App() {
  useAppEffect();
  useAsyncStorageFlipperPlugin();
  const {paperTheme, statusBarStyle} = useAppearance();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={paperTheme}>
        <StatusBar animated={true} barStyle={statusBarStyle} />
        <BottomSheetProvider>
          <AppStack />
          <BottomSheet>
            <HomeFloorListView />
          </BottomSheet>
        </BottomSheetProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
