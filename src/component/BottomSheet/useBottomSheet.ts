import {useContext} from 'react';
import {useAtom} from 'jotai';
import {bottomSheetInvokerAtom} from '@/utils/status/atom';
import {BottomSheetContext} from './BottomSheetProvider';

type BottomSheetInvoker = 'floorPicker' | 'historyOfRequestsOptions' | 'debug';

const useBottomSheet = () => {
  const [bottomSheetInvoker, setBottomSheetInvoker] = useAtom(bottomSheetInvokerAtom);
  const bottomSheetRef = useContext(BottomSheetContext);

  const close = () => {
    bottomSheetRef?.current?.close();
  };

  const expand = (invoker: BottomSheetInvoker) => {
    bottomSheetRef?.current?.close();
    setBottomSheetInvoker(invoker);
    bottomSheetRef?.current?.expand();
  };

  const resetBottomSheetInvoker = () => {
    setBottomSheetInvoker(undefined);
  };

  return {bottomSheetRef, close, expand, bottomSheetInvoker, resetBottomSheetInvoker};
};

export default useBottomSheet;
export type {BottomSheetInvoker};
