import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import Color from 'color';
import {useAppearance} from '@/utils/appearance';

declare const global: {
  HermesInternal: null | {
    getRuntimeProperties: () => {
      'OSS Release Version': string;
    };
  };
};

function About() {
  const insets = useSafeAreaInsets();
  const {colors} = useAppearance().paperTheme;

  const hermeVersion = global.HermesInternal?.getRuntimeProperties?.()['OSS Release Version'] ?? '';

  const version = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();

  return (
    <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingBottom: insets.bottom}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('@/assets/appIcon/AppIcon180w.png')}
          style={{width: 90, height: 90, marginTop: 40, marginBottom: 16}}
        />
        <Text variant="titleSmall" style={{color: colors.primary}}>
          EladmeGo Version {version} ({buildNumber})
        </Text>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 48}}>
        <Text variant="bodySmall" style={{color: colors.onPrimaryContainer, fontSize: 10}}>
          Made with ❤️ in Kunming by SvenFE
        </Text>
        <Text variant="bodySmall" style={{color: Color(colors.onBackground).alpha(0.5).hexa(), marginTop: 8}}>
          Engine: Hermes {hermeVersion}
        </Text>
      </View>
    </View>
  );
}

export default About;
