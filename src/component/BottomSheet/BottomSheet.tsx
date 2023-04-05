import React, {PropsWithChildren, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import GorhomBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import {useAppearance} from '@/utils/appearance';
import useBottomSheet from './useBottomSheet';

const BottomSheet = (props: PropsWithChildren<{}>) => {
  const {children} = props;
  const rnColorScheme = useColorScheme();
  const {bottomSheetRef} = useBottomSheet();
  const {themeScheme, setStatusBarStyle} = useAppearance();

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
      onChange={currentSnapPoint => {
        console.log('BottomSheet onChange', currentSnapPoint);

        if (currentSnapPoint === 0) {
          setStatusBarStyle('light-content');
        }

        if (currentSnapPoint === -1) {
          switch (themeScheme) {
            case 'light':
              setStatusBarStyle('dark-content');
              break;
            case 'dark':
              setStatusBarStyle('light-content');
              break;
            case 'system':
              setStatusBarStyle(rnColorScheme === 'dark' ? 'light-content' : 'dark-content');
              break;
            default:
              const n: never = themeScheme;
              throw new Error('Unexpected themeScheme: ' + n);
          }
        }
      }}>
      {children}
    </GorhomBottomSheet>
  );
};

export default BottomSheet;
