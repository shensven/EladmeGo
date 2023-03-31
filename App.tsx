import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppStack from './src/AppStack';
import 'react-native-gesture-handler';

function App() {
  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
}

export default App;
