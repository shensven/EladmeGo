import {jest} from '@jest/globals';
import mockBottomSheet from '@gorhom/bottom-sheet/mock';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.useFakeTimers();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@gorhom/bottom-sheet', () => ({
  ...mockBottomSheet,
  __esModule: true,
}));

jest.mock('react-native-flipper', () => {
  return {
    addPlugin: jest.fn(),
  };
});

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

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

jest.mock('@react-navigation/elements', () => {
  return {
    useHeaderHeight: jest.fn().mockReturnValue(0),
  };
});

jest.mock('@react-navigation/devtools', () => {
  return {
    useFlipper: jest.fn(),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('uuid', () => {
  return {
    v4: jest.fn().mockReturnValue('uuid'),
  };
});

jest.mock('react-native-image-progress', () => {
  return {
    Image: 'Image',
  };
});

jest.mock('react-native-progress', () => {
  return {
    Bar: 'Bar',
  };
});
