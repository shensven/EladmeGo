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
      mode="contained"
      size={48}
      icon={IcRoundNoAdultContentSvg}
      rippleColor={Color(paperTheme.colors.primary).alpha(0.6).hexa()}
      containerColor={Color(paperTheme.colors.primary).alpha(0.6).hexa()}
      style={{position: 'absolute', margin: 20, right: 0, bottom: 0}}
      onPress={() => {
        expand('debug');
      }}
    />
  );
}

export default DebugView;
