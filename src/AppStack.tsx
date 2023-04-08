import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {HeaderStyleInterpolators, TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {useFlipper} from '@react-navigation/devtools';
import {navigationLightTheme, useAppearance} from '@/utils/appearance';
import {Home, HeaderRight as HomeHeaderRight, HeaderTitle} from '@/screen/Home';
import {InviteVisitors} from '@/screen/InviteVisitors';
import {Settings} from '@/screen/Settings';
import {Welcome} from '@/screen/Welcome';
import {AccessToken} from '@/screen/AccessToken';
import {HeaderRight as HistoryOfRequestsHeaderRight, HistoryOfRequests} from '@/screen/HistoryOfRequests';
import {Appearance} from '@/screen/Appearance';
import {OpenSourceLibraries} from './screen/OpenSourceLibraries';
import {About} from '@/screen/About';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  const {navigationTheme} = useAppearance();
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={navigationTheme}
      onReady={() => {
        RNBootSplash.hide({fade: true, duration: 320});
      }}>
      <Navigator
        initialRouteName="EladmeGo"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            elevation: 0, // Android
            shadowOpacity: 0, // iOS
            backgroundColor: navigationTheme.colors.background,
          },
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}>
        <Screen
          name="EladmeGo"
          component={Home}
          options={{
            headerTitle: HeaderTitle,
            headerRight: HomeHeaderRight,
          }}
        />
        <Screen name="InviteVisitors" component={InviteVisitors} options={{headerTitle: '邀请访客(WIP)'}} />
        <Screen name="Settings" component={Settings} options={{headerTitle: '设置'}} />
        <Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitle: '欢迎',
            headerTitleStyle: {display: 'none'},
            headerTintColor: navigationLightTheme.colors.onBackground,
            headerMode: 'screen',
            headerTransparent: true,
            cardStyle: {
              // backgroundColor: Color(navigationTheme.colors.surfaceVariant).alpha(0.5).hexa(),
              backgroundColor: '#F2E8E2',
            },
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <Screen name="AccessToken" component={AccessToken} options={{headerTitle: '访问令牌'}} />
        <Screen
          name="HistoryOfRequests"
          component={HistoryOfRequests}
          options={{headerTitle: '最近请求', headerRight: HistoryOfRequestsHeaderRight, headerTransparent: true}}
        />
        <Screen name="Appearance" component={Appearance} options={{headerTitle: '外观'}} />
        <Screen name="OpenSourceLibraries" component={OpenSourceLibraries} options={{headerTitle: '开源库'}} />
        <Screen name="About" component={About} options={{headerTitle: '关于'}} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
