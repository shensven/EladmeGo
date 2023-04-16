import React from 'react';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useHttpLog} from '@/utils/httpLog';
import {useAppearance} from '@/utils/appearance';
import {IcRoundMiscellaneousServices} from '@/component/Icon';
import {useBottomSheet} from '@/component/BottomSheet';
import color from 'color';

function IcRoundMiscellaneousServicesSvg() {
  const {navigationTheme} = useAppearance();
  return <IcRoundMiscellaneousServices width={24} height={24} color={navigationTheme.colors.text} />;
}

function HeaderRight() {
  const {navigationTheme} = useAppearance();
  const {expand} = useBottomSheet();
  const {httpLog} = useHttpLog();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Text variant="titleSmall" style={{color: color(navigationTheme.colors.text).alpha(0.5).hexa()}}>
        {httpLog.length} 个项目
      </Text>
      <IconButton icon={IcRoundMiscellaneousServicesSvg} onPress={() => expand('historyOfRequestsOptions')} />
    </View>
  );
}

export default HeaderRight;
