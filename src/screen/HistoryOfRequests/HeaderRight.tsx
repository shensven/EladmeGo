import React from 'react';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useAtom} from 'jotai';
import {httpLogAtom} from '@/utils/status/atom';
import {useAppearance} from '@/utils/appearance';
import {IcRoundMiscellaneousServices} from '@/component/Icon';
import Color from 'color';

function IcRoundMiscellaneousServicesSvg() {
  const {navigationTheme} = useAppearance();
  return <IcRoundMiscellaneousServices width={24} height={24} color={navigationTheme.colors.text} />;
}

function HeaderRight() {
  const {navigationTheme} = useAppearance();
  const [httpLog] = useAtom(httpLogAtom);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Text variant="titleSmall" style={{color: Color(navigationTheme.colors.text).alpha(0.5).hexa()}}>
        {httpLog.length} 个项目
      </Text>
      <IconButton icon={IcRoundMiscellaneousServicesSvg} onPress={() => {}} />
    </View>
  );
}

export default HeaderRight;
