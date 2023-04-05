import React, {PropsWithChildren, useCallback} from 'react';
import GorhomBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import useBottomSheet from './useBottomSheet';

const BottomSheet = (props: PropsWithChildren<{}>) => {
  const {children} = props;
  const {bottomSheetRef} = useBottomSheet();

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
      {children}
    </GorhomBottomSheet>
  );
};

export default BottomSheet;
