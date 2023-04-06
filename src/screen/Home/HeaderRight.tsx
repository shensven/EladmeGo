import React from 'react';
import {Platform, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {IcRoundMoreHoriz, IcRoundMoreVert, IcRoundShareArrivalTime} from '@/component/Icon';

function IconButtonShare() {
  const {navigationTheme} = useAppearance();
  return <IcRoundShareArrivalTime color={navigationTheme.colors.text} />;
}

function IconButtonMore() {
  const {navigationTheme} = useAppearance();
  switch (Platform.OS) {
    case 'ios':
      return <IcRoundMoreHoriz color={navigationTheme.colors.text} />;
    case 'android':
      return <IcRoundMoreVert color={navigationTheme.colors.text} />;
    case 'macos':
      return <IcRoundMoreHoriz color={navigationTheme.colors.text} />;
    case 'windows':
      return <IcRoundMoreVert color={navigationTheme.colors.text} />;
    case 'web':
      return <IcRoundMoreVert color={navigationTheme.colors.text} />;
    default:
      return <IcRoundMoreVert color={navigationTheme.colors.text} />;
  }
}

type StackParamList = {
  InviteVisitors: undefined;
  Settings: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

function HeaderRight() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconButton icon={IconButtonShare} onPress={() => navigation.navigate('InviteVisitors')} />
      <IconButton icon={IconButtonMore} onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

export default HeaderRight;
