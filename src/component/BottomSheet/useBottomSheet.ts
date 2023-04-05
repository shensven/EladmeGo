import {useContext} from 'react';
import {BottomSheetContext} from './BottomSheetProvider';

const useBottomSheet = () => {
  const bottomSheetRef = useContext(BottomSheetContext);

  const close = () => {
    bottomSheetRef?.current?.close();
  };

  const expand = () => {
    bottomSheetRef?.current?.expand();
  };

  return {bottomSheetRef, close, expand};
};

export default useBottomSheet;
