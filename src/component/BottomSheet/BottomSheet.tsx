import React, {PropsWithChildren} from 'react';
import GorhomBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import {useAppearance} from '@/utils/appearance';
import useBottomSheet from './useBottomSheet';

const renderBackdrop = (bottomSheetBackdropProps: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...bottomSheetBackdropProps} disappearsOnIndex={-1} />
);

const BottomSheet = (props: PropsWithChildren<{}>) => {
  const {children} = props;
  const {paperTheme} = useAppearance();
  const {bottomSheetRef} = useBottomSheet();

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['63%']}
      enablePanDownToClose
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

export default BottomSheet;
