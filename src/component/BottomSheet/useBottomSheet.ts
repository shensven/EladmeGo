import {useContext} from 'react';
import {useAtom} from 'jotai';
import {bottomSheetInvokerAtom} from '@/utils/status/atom';
import {BottomSheetContext} from './BottomSheetProvider';

type BottomSheetInvoker = 'floorPicker' | 'debug';

const useBottomSheet = () => {
  const [bottomSheetInvoker, setBottomSheetInvoker] = useAtom(bottomSheetInvokerAtom);
  const bottomSheetRef = useContext(BottomSheetContext);

  const close = () => {
    bottomSheetRef?.current?.close();
    setBottomSheetInvoker(undefined);
  };

  const expand = (invoker: BottomSheetInvoker) => {
    bottomSheetRef?.current?.close();
    setBottomSheetInvoker(invoker);
    bottomSheetRef?.current?.expand();
  };

  return {bottomSheetRef, close, expand, bottomSheetInvoker};
};

export default useBottomSheet;
export type {BottomSheetInvoker};
