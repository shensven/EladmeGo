import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import GorhomBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import useBottomSheet from './useBottomSheet';

const BottomSheet = () => {
  const {bottomSheetRef, close} = useBottomSheet();

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />,
    [],
  );

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['65%']}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      onChange={() => {}}>
      <View style={{flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Awesome 🎉</Text>
        <Button mode="contained-tonal" onPress={() => close()}>
          Close
        </Button>
      </View>
    </GorhomBottomSheet>
  );
};

export default BottomSheet;
