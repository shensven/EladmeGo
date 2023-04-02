import React from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {HeaderStyleInterpolators, TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {useFlipper} from '@react-navigation/devtools';
import {useAppearance} from './utils/appearance';
import {Home, HeaderRight} from './screen/home';
import {Settings} from './screen/settings';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  const {navigationTheme} = useAppearance();

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
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
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
