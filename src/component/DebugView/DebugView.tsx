import React from 'react';
import {IconButton} from 'react-native-paper';
import {useBottomSheet} from '@/component/BottomSheet';
import {useAppearance} from '@/utils/appearance';
import {IcRoundNoAdultContent} from '@/component/Icon';
import Color from 'color';

function IcRoundNoAdultContentSvg() {
  const {paperTheme} = useAppearance();
  return <IcRoundNoAdultContent width={36} height={36} color={paperTheme.colors.onPrimary} />;
}

function DebugView() {
  const {paperTheme} = useAppearance();
  const {expand} = useBottomSheet();

  return (
    <IconButton
      icon={IcRoundNoAdultContentSvg}
      mode="contained"
      size={48}
      containerColor={Color(paperTheme.colors.primary).alpha(0.6).hexa()}
      style={{position: 'absolute', margin: 16, right: 0, bottom: 0}}
      onPress={() => {
        expand();
      }}
    />
  );
}

export default DebugView;
