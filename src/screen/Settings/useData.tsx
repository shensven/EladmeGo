import React from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {
  IcRoundAdminPanelSettings,
  IcRoundBugReport,
  IcRoundChevronRight,
  IcRoundCode,
  IcRoundColorLens,
  IcRoundInfo,
  IcRoundOpenInNew,
  IcRoundWaterfallChart,
} from '@/component/Icon';
import color from 'color';

type StackParamList = {
  Welcome: undefined;
  AccessToken: undefined;
  HistoryOfRequests: undefined;
  Appearance: undefined;
  PrivacyPolicy: undefined;
  OpenSourceLibraries: undefined;
  About: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

const useData = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<ScreenNavigationProp>();

  let initData: {
    title: string;
    description?: string;
    leftIcon: React.ReactElement;
    rightIcon: React.ReactElement;
    onPress: () => void;
  }[] = [];

  // initData.push({
  //   title: '欢迎',
  //   leftIcon: <IcRoundAutoAwesome color={color(colors.onBackground).alpha(0.9).toString()} />,
  //   rightIcon: <IcRoundChevronRight color={color(colors.onBackground).alpha(0.7).toString()} />,
  //   onPress: () => navigation.navigate('Welcome'),
  // });

  const data = [
    ...initData,
    {
      title: '访问令牌',
      leftIcon: (
        <IcRoundAdminPanelSettings width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />
      ),
      rightIcon: (
        <IcRoundChevronRight width={24} height={24} color={color(colors.onBackground).alpha(0.7).toString()} />
      ),
      onPress: () => navigation.navigate('AccessToken'),
    },
    {
      title: '最近请求',
      leftIcon: (
        <IcRoundWaterfallChart width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />
      ),
      rightIcon: (
        <IcRoundChevronRight width={24} height={24} color={color(colors.onBackground).alpha(0.7).toString()} />
      ),
      onPress: () => navigation.navigate('HistoryOfRequests'),
    },
    {
      title: '外观',
      leftIcon: <IcRoundColorLens width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: (
        <IcRoundChevronRight width={24} height={24} color={color(colors.onBackground).alpha(0.7).toString()} />
      ),
      onPress: () => navigation.navigate('Appearance'),
    },
    {
      title: '开源库',
      leftIcon: <IcRoundCode width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: (
        <IcRoundChevronRight width={24} height={24} color={color(colors.onBackground).alpha(0.7).toString()} />
      ),
      onPress: () => navigation.navigate('OpenSourceLibraries'),
    },
    {
      title: '报告问题',
      description: 'https://github.com/shensven/EladmeGo/issues',
      leftIcon: <IcRoundBugReport width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: <IcRoundOpenInNew width={18} height={18} color={color(colors.onBackground).alpha(0.7).toString()} />,
      onPress: () => Linking.openURL('https://github.com/shensven/EladmeGo/issues'),
    },
    {
      title: '关于',
      leftIcon: <IcRoundInfo width={24} height={24} color={color(colors.onBackground).alpha(0.9).toString()} />,
      rightIcon: (
        <IcRoundChevronRight width={24} height={24} color={color(colors.onBackground).alpha(0.7).toString()} />
      ),
      onPress: () => navigation.navigate('About'),
    },
  ];

  return data;
};

export default useData;
