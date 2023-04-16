import React from 'react';
import 'react-native-get-random-values';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native-bars';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useAppEffect} from '@/utils/appEffect';
import {useAsyncStorageFlipperPlugin} from '@/utils/asyncStorage';
import {useAppearance} from '@/utils/appearance';
import {BottomSheet as DebugBottomSheet, DebugView} from '@/component/DebugView';
import {BottomSheetContainer, BottomSheetProvider, useBottomSheet} from '@/component/BottomSheet';
import {BottomSheet as HomeFloorListView} from '@/screen/Home';
import {BottomSheet as HistoryOfRequestsBottomSheet} from '@/screen/HistoryOfRequests';
import AppStack from '@/AppStack';

function App() {
  useAppEffect();
  useAsyncStorageFlipperPlugin();
  const {paperTheme, statusBarStyle} = useAppearance();
  const {bottomSheetInvoker} = useBottomSheet();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={paperTheme}>
        <StatusBar animated={true} barStyle={statusBarStyle} />
        <BottomSheetProvider>
          <AppStack />
          <BottomSheetContainer>
            {bottomSheetInvoker === 'floorPicker' && <HomeFloorListView />}
            {bottomSheetInvoker === 'historyOfRequestsOptions' && <HistoryOfRequestsBottomSheet />}
            {bottomSheetInvoker === 'debug' && <DebugBottomSheet />}
          </BottomSheetContainer>
          {__DEV__ && <DebugView />}
        </BottomSheetProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
