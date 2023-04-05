import React from 'react';
import {Button} from 'react-native-paper';
import {useBottomSheet} from '@/component/BottomSheet';

function DebugView() {
  const {expand} = useBottomSheet();

  return (
    <Button
      uppercase
      mode="contained-tonal"
      onPress={() => {
        expand();
      }}>
      Debug
    </Button>
  );
}

export default DebugView;
