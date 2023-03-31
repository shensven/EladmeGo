import {jest} from '@jest/globals';

jest.useFakeTimers();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn().mockReturnValue({
      Navigator: 'Navigator',
      Screen: 'Screen',
    }),
    TransitionPresets: {
      SlideFromRightIOS: 'SlideFromRightIOS',
    },
    HeaderStyleInterpolators: {
      forUIKit: 'forUIKit',
    },
  };
});

jest.mock('@react-navigation/devtools', () => {
  return {
    useFlipper: jest.fn(),
  };
});
