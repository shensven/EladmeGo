import React from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {
  IcRoundAdminPanelSettings,
  IcRoundAutoAwesome,
  IcRoundBugReport,
  IcRoundChevronRight,
  IcRoundCode,
  IcRoundColorLens,
  IcRoundInfo,
  IcRoundOpenInNew,
} from '@/component/icon';
import color from 'color';

type StackParamList = {
  Welcome: undefined;
  AccessToken: undefined;
  Appearance: undefined;
  PrivacyPolicy: undefined;
  OpenSourceLibraries: undefined;
  About: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

const useData = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<ScreenNavigationProp>();

  const data = [
    {
      title: '欢迎',
      leftIcon: <IcRoundAutoAwesome color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
      onPress: () => navigation.navigate('Welcome'),
    },
    {
      title: '访问令牌',
      leftIcon: <IcRoundAdminPanelSettings color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
      onPress: () => navigation.navigate('AccessToken'),
    },
    {
      title: '外观',
      leftIcon: <IcRoundColorLens color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
      onPress: () => navigation.navigate('Appearance'),
    },
    {
      title: '开源库',
      leftIcon: <IcRoundCode color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
      // onPress: () => navigation.navigate('OpenSourceLibraries'),
      onPress: () => {},
    },
    {
      title: '报告问题',
      description: 'https://github.com/shensven/EladmeGo/issues',
      leftIcon: <IcRoundBugReport color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundOpenInNew color={color(colors.onBackground).alpha(0.7).toString()} size={18} />,
      onPress: () => Linking.openURL('https://github.com/shensven/EladmeGo/issues'),
    },
    {
      title: '关于',
      leftIcon: <IcRoundInfo color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
      onPress: () => navigation.navigate('About'),
    },
  ];

  return data;
};

export default useData;
