import React, {PropsWithChildren, useCallback} from 'react';
import GorhomBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import useBottomSheet from './useBottomSheet';

const BottomSheet = (props: PropsWithChildren<{}>) => {
  const {children} = props;
  const {bottomSheetRef} = useBottomSheet();

  const renderBackdrop = useCallback(
    (bottomSheetBackdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...bottomSheetBackdropProps} disappearsOnIndex={-1} />
    ),
    [],
  );

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['63%']}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      style={{marginHorizontal: 16}}
      onChange={() => {}}>
      {children}
    </GorhomBottomSheet>
  );
};

export default BottomSheet;
