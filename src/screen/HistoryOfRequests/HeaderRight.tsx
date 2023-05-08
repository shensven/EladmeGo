import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {IcRoundMiscellaneousServices} from '@/component/Icon';
import {useBottomSheet} from '@/component/BottomSheet';

function IcRoundMiscellaneousServicesSvg() {
  const {navigationTheme} = useAppearance();
  return <IcRoundMiscellaneousServices width={24} height={24} color={navigationTheme.colors.text} />;
}

function HeaderRight() {
  const {expand} = useBottomSheet();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <IconButton icon={IcRoundMiscellaneousServicesSvg} onPress={() => expand('historyOfRequestsOptions')} />
    </View>
  );
}

export default HeaderRight;
