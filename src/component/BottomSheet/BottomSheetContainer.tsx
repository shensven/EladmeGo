import React, {PropsWithChildren} from 'react';
import {Platform} from 'react-native';
import GorhomBottomSheet, {BottomSheetBackdrop, useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import {useAppearance} from '@/utils/appearance';
import useBottomSheet from './useBottomSheet';

const renderBackdrop = (bottomSheetBackdropProps: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...bottomSheetBackdropProps} disappearsOnIndex={-1} />
);

const BottomSheetContainer = (props: PropsWithChildren<{}>) => {
  const {children} = props;
  const {paperTheme} = useAppearance();
  const {bottomSheetRef} = useBottomSheet();

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 100,
    mass: 1,
    stiffness: 500,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  });

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['63%']}
      enablePanDownToClose
      animationConfigs={Platform.OS === 'android' ? animationConfigs : undefined}
      backdropComponent={renderBackdrop}
      style={{
        marginHorizontal: 16,
      }}
      backgroundStyle={{
        backgroundColor: paperTheme.colors.background,
        elevation: 16,
        shadowColor: paperTheme.colors.backdrop,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.12,
        shadowRadius: 8,
      }}
      handleIndicatorStyle={{
        backgroundColor: paperTheme.colors.onBackground,
      }}
      onChange={() => {}}>
      {children}
    </GorhomBottomSheet>
  );
};

export default BottomSheetContainer;
