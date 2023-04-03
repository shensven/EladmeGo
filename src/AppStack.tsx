import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import type {NavigationState} from '@react-navigation/native';
import {HeaderStyleInterpolators, TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {useFlipper} from '@react-navigation/devtools';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken} from '@/utils/httpClient';
import {usePassQr} from '@/utils/passQr';
import {Home, HeaderRight} from '@/screen/Home';
import {Settings} from '@/screen/Settings';
import {Welcome} from './screen/Welcome';
import {AccessToken} from '@/screen/AccessToken';
import {Appearance} from '@/screen/Appearance';
import {About} from '@/screen/About';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  const {navigationTheme} = useAppearance();
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  const {accessToken} = useAccessToken();
  const {getPassQr} = usePassQr();

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme} onReady={() => RNBootSplash.hide()}>
      <Navigator
        initialRouteName="Home"
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
        }}
        screenListeners={{
          state: (event: {data?: {state?: NavigationState}}) => {
            if (event.data?.state?.routes.at(-1)?.name === 'Home') {
              if (accessToken.length > 0) {
                getPassQr();
              }
            }
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'EladmeGo',
            headerRight: HeaderRight,
          }}
        />
        <Screen name="Settings" component={Settings} options={{headerTitle: '设置'}} />
        <Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitle: '欢迎',
            headerTitleStyle: {display: 'none'},
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
        <Screen name="Appearance" component={Appearance} options={{headerTitle: '外观'}} />
        <Screen name="About" component={About} options={{headerTitle: '关于'}} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
