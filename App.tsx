import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useAppearance} from './src/utils/appearance';
import AppStack from './src/AppStack';
import 'react-native-gesture-handler';

function App() {
  const {paperTheme} = useAppearance();

  return (
    <PaperProvider theme={paperTheme}>
      <AppStack />
    </PaperProvider>
  );
}

export default App;
