import React, {createContext, useRef} from 'react';
import type {PropsWithChildren, RefObject} from 'react';
import type GorhomBottomSheet from '@gorhom/bottom-sheet';

const BottomSheetContext = createContext<RefObject<GorhomBottomSheet> | null>(null);

function BottomSheetProvider(props: PropsWithChildren<{}>) {
  const {children} = props;
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  return <BottomSheetContext.Provider value={bottomSheetRef}>{children}</BottomSheetContext.Provider>;
}

export default BottomSheetProvider;
export {BottomSheetContext};
